import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  status?: string;
}

export const PageHeader = ({ eyebrow, title, description, status }: PageHeaderProps) => (
  <div className="space-y-4">
    {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p> : null}
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        <p className="text-base leading-7 text-slate-600">{description}</p>
      </div>
      {status ? <Badge tone="brand">{status}</Badge> : null}
    </div>
  </div>
);
