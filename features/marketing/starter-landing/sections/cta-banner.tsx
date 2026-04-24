import { useTranslations } from "next-intl";

import type { BrandConfig } from "../types";

type CTABannerProps = {
  brand: BrandConfig;
};

export function CTABanner({ brand }: CTABannerProps) {
  const t = useTranslations("marketingStarterLanding.cta");

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,163,115,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(44,125,160,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#12344D] shadow-[0_30px_90px_rgba(18,52,77,0.24)]">
        <div className="absolute inset-0 opacity-60" aria-hidden="true">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#2C7DA0]/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D4A373]/20 blur-3xl" />
        </div>

        <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-12 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              {brand.agencyName}
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("titleStart")}{" "}
              <span className="text-[#D4A373]">{t("titleAccent")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t("description", { agencyName: brand.agencyName })}
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Curated listings and high-intent leads in one clear flow.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Premium follow-up without visual clutter.
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <div className="space-y-3 rounded-[24px] bg-[#F7F3EC] p-5 shadow-[0_18px_50px_rgba(18,52,77,0.14)]">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4B5563]">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors duration-200 placeholder:text-[#9CA3AF] focus:border-[#2C7DA0] focus-visible:border-[#2C7DA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
                aria-label={t("emailLabel")}
              />
              <a
                href={brand.primaryCtaHref}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#D4A373] px-6 py-3 text-center text-sm font-semibold text-[#12344D] transition-colors duration-200 hover:bg-[#C6925E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
              >
                {t("button")}
              </a>
              <p className="text-xs leading-relaxed text-[#4B5563]">{t("disclaimer")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
