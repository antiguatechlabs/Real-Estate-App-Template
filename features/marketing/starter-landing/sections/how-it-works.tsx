import { useTranslations } from "next-intl";

const steps = ["search", "visit", "deal"] as const;

export function HowItWorks() {
  const t = useTranslations("marketingStarterLanding.howItWorks");

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#EFE8DD]/70 px-6 py-24 md:py-32"
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

        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] top-8 hidden h-px bg-gradient-to-r from-[#12344D]/15 via-[#D4A373]/70 to-[#12344D]/15 md:block" />

          {steps.map((step, index) => (
            <div
              key={step}
              className="relative flex flex-col items-center gap-4 rounded-[28px] border border-[#E5E7EB] bg-white p-8 text-center shadow-[0_18px_50px_rgba(18,52,77,0.06)]"
            >
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#12344D] text-lg font-bold text-white shadow-[0_14px_35px_rgba(18,52,77,0.18)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-[#12344D]">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-[#4B5563]">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
