import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CrmSubpageFrame } from "@/features/crm/components/crm-subpage-frame";
import { crmDailySignals } from "@/features/crm/data/crm-content";
import {
  CRM_LOCALE_COOKIE,
  crmCopy,
  resolveCrmLocale,
} from "@/features/crm/lib/crm-locale";

export const metadata: Metadata = {
  title: "CRM Admin",
  description:
    "Zona de administración interna para permisos, estructura y gobierno del tenant.",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const locale = resolveCrmLocale(cookieStore.get(CRM_LOCALE_COOKIE)?.value);
  const copy = crmCopy[locale].admin;

  return (
    <CrmSubpageFrame
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      highlights={crmDailySignals}
      primaryHref="/app/config"
      primaryLabel={copy.primary}
      secondaryHref="/app"
      secondaryLabel={copy.secondary}
    />
  );
}
