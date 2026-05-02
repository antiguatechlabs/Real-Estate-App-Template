import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CrmSubpageFrame } from "@/features/crm/components/crm-subpage-frame";
import { crmCompanyFacts } from "@/features/crm/data/crm-content";
import {
  CRM_LOCALE_COOKIE,
  crmCopy,
  resolveCrmLocale,
} from "@/features/crm/lib/crm-locale";

export const metadata: Metadata = {
  title: "CRM Configuración",
  description:
    "Zona de configuración del CRM para moneda, zona horaria y reglas por tenant.",
};

export default async function ConfigPage() {
  const cookieStore = await cookies();
  const locale = resolveCrmLocale(cookieStore.get(CRM_LOCALE_COOKIE)?.value);
  const copy = crmCopy[locale].config;

  return (
    <CrmSubpageFrame
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      highlights={crmCompanyFacts}
      primaryHref="/app/admin"
      primaryLabel={copy.primary}
      secondaryHref="/app"
      secondaryLabel={copy.secondary}
    />
  );
}
