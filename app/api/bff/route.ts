import { NextResponse } from "next/server";

export async function GET() {
  const payload = {
    configured: Boolean(process.env.CRM_API_BASE_URL ?? process.env.NEXT_PUBLIC_CRM_API_BASE_URL),
    name: "CRM BFF",
    tenant: process.env.CRM_TENANT_CODE ?? "MERCAFARMA",
  };

  return NextResponse.json(payload);
}
