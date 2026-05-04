import { StatusBadge } from "./crm-operations-primitives";

type IntegrationStatusProps = {
  isConnected: boolean;
  lastCheck: string;
};

export function CrmIntegrationStatus({ isConnected, lastCheck }: IntegrationStatusProps) {
  return (
    <section className="rounded-lg border border-[#E5E1D8] bg-white p-4">
      <p className="text-sm font-semibold text-[#111111]">Integracion CRM / BFF</p>
      <div className="mt-3">
        <StatusBadge tone={isConnected ? "success" : "danger"}>
          {isConnected ? "Conectada" : "Fallback local"}
        </StatusBadge>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#5E625C]">Ultimo chequeo: {lastCheck}</p>
    </section>
  );
}
