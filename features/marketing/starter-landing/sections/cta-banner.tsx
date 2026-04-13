import { useTranslations } from "next-intl";

import type { BrandConfig } from "../types";

type CTABannerProps = {
  brand: BrandConfig;
};

export function CTABanner({ brand }: CTABannerProps) {
  const t = useTranslations("marketingStarterLanding.cta");

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
          {t("titleStart")} <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            {t("titleAccent")}
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-lg text-slate-400">
          {t("description", { agencyName: brand.agencyName })}
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="flex-1 rounded-xl border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-sky-500/50"
            aria-label={t("emailLabel")}
          />
          <a
            href={brand.primaryCtaHref}
            className="whitespace-nowrap rounded-xl bg-sky-500 px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-sky-400"
          >
            {t("button")}
          </a>
        </div>
        <p className="text-xs text-slate-600">{t("disclaimer")}</p>
      </div>
    </section>
  );
}
