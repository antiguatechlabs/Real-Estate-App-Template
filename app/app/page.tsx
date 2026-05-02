import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CrmShell } from "@/features/crm/components/crm-shell";
import { CRM_LOCALE_COOKIE, resolveCrmLocale } from "@/features/crm/lib/crm-locale";

export const metadata: Metadata = {
  title: "CRM",
  description:
    "Panel interno del CRM con navegación premium, bento operativo, motion y acciones diarias.",
};

export default async function ClientAppPage() {
  const cookieStore = await cookies();
  const locale = resolveCrmLocale(cookieStore.get(CRM_LOCALE_COOKIE)?.value);

  return <CrmShell locale={locale} />;
}
