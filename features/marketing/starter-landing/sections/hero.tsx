import { useTranslations } from "next-intl";

import { Tooltip } from "@/components/ui/tooltip";

import type { BrandConfig } from "../types";

type HeroProps = {
  brand: BrandConfig;
};

export function Hero({ brand }: HeroProps) {
  const t = useTranslations("marketingStarterLanding.hero");

  return (
    <section className="relative overflow-hidden bg-[#F7F3EC] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,163,115,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(44,125,160,0.08),transparent_28%)]" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#12344D]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium text-[#4B5563]">
            {t("eyebrow", { city: brand.city })}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight text-[#12344D] sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("titleStart")}{" "}
            <span className="text-[#D4A373]">{t("titleAccent")}</span>{" "}
            <br className="hidden md:block" />
            {t("titleEnd", { city: brand.city })}
          </h1>

          <div className="mt-6 flex min-w-0 max-w-2xl items-start gap-3 text-base leading-relaxed text-[#4B5563] sm:text-lg">
            <p className="min-w-0 break-words">{t("description")}</p>
            <Tooltip content={`${t("popularLabel")} ${brand.popularAreas.join(" · ")}`} />
          </div>

          <div className="mt-10 w-full max-w-4xl rounded-2xl border border-[#E5E7EB] bg-white/92 p-3">
            <div className="grid gap-3 lg:grid-cols-[1.3fr_0.8fr_0.8fr_auto]">
              <label className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F7F3EC] px-4 py-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#2C7DA0]"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  type="text"
                  placeholder={t("locationPlaceholder")}
                  className="min-w-0 w-full bg-transparent text-sm text-[#1F2937] outline-none placeholder:text-[#9CA3AF]"
                />
              </label>

              <select
                className="cursor-pointer rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors duration-200 focus:border-[#2C7DA0] focus-visible:border-[#2C7DA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
                defaultValue=""
                aria-label={t("filters.propertyTypeLabel")}
              >
                <option value="" disabled>
                  {t("filters.propertyTypePlaceholder")}
                </option>
                <option value="buy">{t("filters.propertyTypeSale")}</option>
                <option value="rent">{t("filters.propertyTypeRent")}</option>
                <option value="commercial">{t("filters.propertyTypeCommercial")}</option>
              </select>

              <select
                className="cursor-pointer rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors duration-200 focus:border-[#2C7DA0] focus-visible:border-[#2C7DA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
                defaultValue=""
                aria-label={t("filters.bedsLabel")}
              >
                <option value="" disabled>
                  {t("filters.bedsPlaceholder")}
                </option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>

              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#12344D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F2A3D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                {t("search")}
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/70 bg-[#12344D] md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://picsum.photos/seed/premium-real-estate-hero/1600/1200')",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,163,115,0.22),transparent_28%),linear-gradient(140deg,rgba(18,52,77,0.12)_0%,rgba(18,52,77,0.58)_52%,rgba(18,52,77,0.78)_100%)]" />
          <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />

          <div className="absolute inset-0 p-6 sm:p-8">
            <div className="flex h-full flex-col justify-between">
              <div className="max-w-xs rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                  {brand.agencyName}
                </p>
              </div>

              <div className="ml-auto max-w-sm rounded-xl border border-white/15 bg-[#F7F3EC]/95 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2C7DA0]">
                  {t("popularLabel")}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#12344D]">
                  {brand.popularAreas.slice(0, 3).join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-[#4B5563]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
