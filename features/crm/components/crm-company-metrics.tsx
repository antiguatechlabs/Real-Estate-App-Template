import { CrmCompanyMetricCard } from "./crm-company-metric-card";

function CubesIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="m12 3 5 2.75v5.5L12 14l-5-2.75v-5.5L12 3Zm0 11v7m-5-9.75-4 2.2v4.4l4 2.2 4-2.2m6-6.6 4 2.2v4.4l-4 2.2-4-2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 10V8a5 5 0 0 1 10 0v2M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="M3.75 6.75h6l2 2h8.5v8.75a1.75 1.75 0 0 1-1.75 1.75h-13a1.75 1.75 0 0 1-1.75-1.75V6.75Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="m9.75 14.25 4.5-4.5M10.5 7.25l.9-.9a4 4 0 0 1 5.66 5.66l-.9.9M13.5 16.75l-.9.9a4 4 0 1 1-5.66-5.66l.9-.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

type CompanyMetricsProps = {
  availableCount: number;
  blockedCount: number;
  connectionErrorMessage: string;
  isConnected: boolean;
  projectNames: string[];
  projectsCount: number;
};

export function CrmCompanyMetrics({
  availableCount,
  blockedCount,
  connectionErrorMessage,
  isConnected,
  projectNames,
  projectsCount,
}: CompanyMetricsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <CrmCompanyMetricCard
        icon={<CubesIcon />}
        label="Lotes disponibles"
        note="+6.1% vs semana anterior"
        tone="amber"
        value={new Intl.NumberFormat("es-GT").format(availableCount)}
      />
      <CrmCompanyMetricCard
        icon={<LockIcon />}
        label="Lotes bloqueados"
        note="-2.3% vs semana anterior"
        tone="red"
        value={new Intl.NumberFormat("es-GT").format(blockedCount)}
      />
      <CrmCompanyMetricCard
        icon={<FolderIcon />}
        label="Proyectos activos"
        note={projectNames.slice(0, 2).join(", ")}
        tone="slate"
        value={new Intl.NumberFormat("es-GT").format(projectsCount)}
      />
      <CrmCompanyMetricCard
        icon={<LinkIcon />}
        label="API conectada"
        note={isConnected ? "BFF · Estado: OK" : connectionErrorMessage}
        tone="green"
        value={isConnected ? "OK" : "Local"}
      />
    </div>
  );
}
