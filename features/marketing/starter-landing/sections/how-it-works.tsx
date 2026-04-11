import { useTranslations } from "next-intl";

const steps = ["search", "visit", "deal"] as const;

export function HowItWorks() {
  const t = useTranslations("marketingStarterLanding.howItWorks");

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-slate-900/30 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] top-8 hidden h-px bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 md:block" />

          {steps.map((step, index) => (
            <div
              key={step}
              className="relative flex flex-col items-center gap-4 text-center"
            >
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-lg font-bold text-white shadow-lg shadow-sky-950/50">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white">{t(`steps.${step}.title`)}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
