import { NextRequest, NextResponse } from "next/server";

import { CRM_LOCALE_COOKIE, resolveCrmLocale } from "@/features/crm/lib/crm-locale";

export function GET(request: NextRequest) {
  const locale = resolveCrmLocale(request.nextUrl.searchParams.get("locale") ?? undefined);
  const referer = request.headers.get("referer");
  const fallbackUrl = new URL("/app", request.url);
  const redirectUrl = referer ? new URL(referer) : fallbackUrl;
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set(CRM_LOCALE_COOKIE, locale, {
    maxAge: 31_536_000,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
