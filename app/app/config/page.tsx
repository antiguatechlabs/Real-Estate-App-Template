import type { Metadata } from "next";

import { CrmSubpageFrame } from "@/features/crm/components/crm-subpage-frame";
import { crmCompanyFacts } from "@/features/crm/data/crm-content";

export const metadata: Metadata = {
  title: "CRM Configuración",
  description:
    "Zona de configuración del CRM para moneda, zona horaria y reglas por tenant.",
};

export default function ConfigPage() {
  return (
    <CrmSubpageFrame
      eyebrow="Configuración"
      title="Ajustes del tenant"
      description="Espacio listo para company settings, catálogos y reglas que definen cómo opera el equipo en producción."
      highlights={crmCompanyFacts}
      primaryHref="/app/admin"
      primaryLabel="Ir a admin"
      secondaryHref="/app"
      secondaryLabel="Volver al panel"
    />
  );
}
