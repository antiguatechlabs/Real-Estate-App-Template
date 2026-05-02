import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const TOKEN_COOKIE = "crm_access_token";
const TENANT_CODE = process.env.CRM_TENANT_CODE ?? "MERCAFARMA";
const API_BASE_URL = process.env.CRM_API_BASE_URL ?? process.env.NEXT_PUBLIC_CRM_API_BASE_URL;

type RouteContext = {
  params: Promise<{
    path: string[];
  }>;
};

function jsonError(message: string, status = 500) {
  return NextResponse.json({ message }, { status });
}

function resolveApiUrl(path: string[], search: string) {
  if (!API_BASE_URL) {
    return null;
  }

  const base = API_BASE_URL.replace(/\/$/, "");
  return `${base}/api/v1/${path.join("/")}${search}`;
}

async function readJsonSafe(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  return response.json();
}

async function proxyRequest(
  request: NextRequest,
  context: RouteContext,
  method: string,
) {
  const { path } = await context.params;
  const apiUrl = resolveApiUrl(path, request.nextUrl.search);

  if (!apiUrl) {
    return jsonError("CRM_API_BASE_URL no está configurado.", 503);
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE)?.value;
  const isLogin = method === "POST" && path.join("/") === "auth/login";
  const headers = new Headers({
    Accept: "application/json",
    "X-Tenant-Code": TENANT_CODE,
  });

  if (token && !isLogin) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const contentType = request.headers.get("content-type");
  let body: BodyInit | undefined;

  if (!["GET", "HEAD"].includes(method)) {
    if (contentType?.includes("multipart/form-data")) {
      body = await request.formData();
    } else {
      headers.set("Content-Type", "application/json");
      body = await request.text();
    }
  }

  const response = await fetch(apiUrl, {
    method,
    headers,
    body,
    cache: "no-store",
  });

  if (path.join("/") === "lots/template") {
    return new NextResponse(response.body, {
      status: response.status,
      headers: {
        "content-disposition": response.headers.get("content-disposition") ?? "attachment",
        "content-type":
          response.headers.get("content-type") ??
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  }

  if (response.status === 204) {
    return new NextResponse(null, { status: 204 });
  }

  const payload = await readJsonSafe(response);
  const nextResponse = NextResponse.json(payload ?? {}, { status: response.status });

  if (isLogin && response.ok && payload?.access_token) {
    nextResponse.cookies.set(TOKEN_COOKIE, payload.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: Number(payload.expires_in ?? 3600),
      path: "/",
    });
  }

  if (path.join("/") === "auth/logout") {
    nextResponse.cookies.delete(TOKEN_COOKIE);
  }

  return nextResponse;
}

export function GET(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context, "GET");
}

export function POST(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context, "POST");
}

export function PUT(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context, "PUT");
}

export function DELETE(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context, "DELETE");
}
