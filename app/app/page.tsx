import type { Metadata } from "next";

import { CrmShell } from "@/features/crm/components/crm-shell";

export const metadata: Metadata = {
  title: "CRM",
  description:
    "Panel interno del CRM con navegación premium, bento operativo, motion y acciones diarias.",
};

export default function ClientAppPage() {
  return <CrmShell />;
}
