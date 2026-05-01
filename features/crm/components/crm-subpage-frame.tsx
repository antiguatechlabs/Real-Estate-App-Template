import Link from "next/link";

import { Tooltip } from "@/components/ui/tooltip";

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
    <main className="w-full max-w-full overflow-x-hidden px-4 py-6 text-[#111111] md:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-2xl border border-[#E5E1D8] bg-[#FBFAF7]/92 p-5 md:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-[#74776F]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-4xl text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5E625C] md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <Link
              href={secondaryHref}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#D8D2C8] bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
            >
              {secondaryLabel}
            </Link>
            <Link
              href={primaryHref}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#111111] bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
            >
              {primaryLabel}
            </Link>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-[#E5E1D8] bg-[#E5E1D8] md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="flex items-start justify-between gap-4 bg-white p-5"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#74776F]">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[#111111]">
                  {item.value}
                </p>
              </div>
              <Tooltip content={item.note} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
