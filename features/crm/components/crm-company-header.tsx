import { StatusBadge } from "./crm-operations-primitives";

type CompanyHeaderProps = {
  companyName: string;
  currency: string;
  timezone: string;
};

export function CrmCompanyHeader({ companyName, currency, timezone }: CompanyHeaderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_repeat(3,minmax(140px,220px))] xl:items-center">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="break-words text-3xl font-normal leading-tight tracking-[-0.035em] text-[#111111] [font-family:var(--crm-serif)]">
            {companyName}
          </h2>
          <StatusBadge tone="success">Operacion activa</StatusBadge>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5E625C]">
          CRM conectado para operar lotes, catalogos e importacion.
        </p>
      </div>
      <div>
        <p className="text-xs font-medium text-[#74776F]">Moneda</p>
        <p className="mt-2 text-xl font-semibold text-[#111111]">{currency}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-[#74776F]">Zona horaria</p>
        <p className="mt-2 text-xl font-semibold text-[#111111]">{timezone}</p>
      </div>
      <div>
        <p className="text-xs font-medium text-[#74776F]">Nivel de acceso</p>
        <p className="mt-2 text-xl font-semibold text-[#111111]">Acceso completo</p>
      </div>
    </div>
  );
}
