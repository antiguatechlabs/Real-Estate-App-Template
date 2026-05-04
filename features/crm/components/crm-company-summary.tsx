import { CrmCompanyHeader } from "./crm-company-header";
import { CrmCompanyMetrics } from "./crm-company-metrics";

type CompanySummaryProps = {
  companyName: string;
  currency: string;
  timezone: string;
  availableCount: number;
  blockedCount: number;
  projectNames: string[];
  projectsCount: number;
  isConnected: boolean;
  connectionErrorMessage: string;
};

export function CompanySummary({
  availableCount,
  blockedCount,
  companyName,
  connectionErrorMessage,
  currency,
  isConnected,
  projectNames,
  projectsCount,
  timezone,
}: CompanySummaryProps) {
  return (
    <section
      id="empresa"
      className="space-y-4 rounded-lg border border-[#E5E1D8] bg-white p-5 md:p-7"
    >
      <CrmCompanyHeader companyName={companyName} currency={currency} timezone={timezone} />
      <CrmCompanyMetrics
        availableCount={availableCount}
        blockedCount={blockedCount}
        connectionErrorMessage={connectionErrorMessage}
        isConnected={isConnected}
        projectNames={projectNames}
        projectsCount={projectsCount}
      />
    </section>
  );
}
