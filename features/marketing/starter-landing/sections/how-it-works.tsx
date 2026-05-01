import { useTranslations } from "next-intl";

import { Tooltip } from "@/components/ui/tooltip";

const steps = ["search", "visit", "deal"] as const;

export function HowItWorks() {
  const t = useTranslations("marketingStarterLanding.howItWorks");

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#EFE8DD]/70 px-4 py-20 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#2C7DA0]">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#E5E7EB] md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative flex items-start justify-between gap-4 bg-white p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B5563]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#12344D]">
                  {t(`steps.${step}.title`)}
                </h3>
              </div>
              <Tooltip content={t(`steps.${step}.description`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
