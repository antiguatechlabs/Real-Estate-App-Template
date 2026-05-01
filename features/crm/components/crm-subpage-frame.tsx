import Link from "next/link";

type CrmSubpageFrameProps = {
  title: string;
  description: string;
  eyebrow: string;
  highlights: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CrmSubpageFrame({
  title,
  description,
  eyebrow,
  highlights,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CrmSubpageFrameProps) {
  return (
    <main className="w-full max-w-full overflow-x-hidden px-4 py-8 text-slate-50">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-50 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {primaryLabel}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-md border border-white/10 bg-slate-950/70 p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-50">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
