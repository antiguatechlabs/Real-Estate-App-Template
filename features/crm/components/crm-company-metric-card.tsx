import type { ReactNode } from "react";

type MetricCardTone = "amber" | "green" | "red" | "slate";

type CompanyMetricCardProps = {
  icon: ReactNode;
  label: string;
  note: string;
  tone: MetricCardTone;
  value: string;
};

export function CrmCompanyMetricCard({
  icon,
  label,
  note,
  tone,
  value,
}: CompanyMetricCardProps) {
  const iconStyles = {
    amber: "bg-[#F5E1C4] text-[#B7791F]",
    green: "bg-[#EDF3EC] text-[#346538]",
    red: "bg-[#FDEBEC] text-[#9F2F2D]",
    slate: "bg-[#F7F6F2] text-[#343831]",
  };

  return (
    <article className="grid min-h-[132px] grid-cols-[56px_minmax(0,1fr)] gap-4 rounded-lg border border-[#E5E1D8] bg-white p-4">
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${iconStyles[tone]}`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="break-words text-sm font-semibold text-[#111111]">{label}</p>
        <p className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.03em] text-[#111111]">
          {value}
        </p>
        <p className="mt-1 break-words text-xs leading-5 text-[#5E625C]">{note}</p>
      </div>
    </article>
  );
}
