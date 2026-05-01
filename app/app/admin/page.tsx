import type { Metadata } from "next";

import { CrmSubpageFrame } from "@/features/crm/components/crm-subpage-frame";
import { crmDailySignals } from "@/features/crm/data/crm-content";

export const metadata: Metadata = {
  title: "CRM Admin",
  description:
    "Zona de administración interna para permisos, estructura y gobierno del tenant.",
};

export default function AdminPage() {
  return (
    <CrmSubpageFrame
      eyebrow="Administración"
      title="Gobierno del CRM"
      description="Base preparada para permisos, flujos internos y control de la experiencia operativa sin ensuciar la pantalla principal."
      highlights={crmDailySignals}
      primaryHref="/app/config"
      primaryLabel="Ir a configuración"
      secondaryHref="/app"
      secondaryLabel="Volver al panel"
    />
  );
}
