import { useTranslations } from "next-intl";

import type { BrandConfig } from "../types";

type HeroProps = {
  brand: BrandConfig;
};

export function Hero({ brand }: HeroProps) {
  const t = useTranslations("marketingStarterLanding.hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(14,165,233,0.12),transparent_60%),radial-gradient(ellipse_at_70%_60%,rgba(37,99,235,0.10),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          {t("eyebrow", { city: brand.city })}
        </span>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t("titleStart")}{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            {t("titleAccent")}
          </span>{" "}
          <br className="hidden sm:block" />
          {t("titleEnd", { city: brand.city })}
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
          {t("description")}
        </p>

        <div className="mx-auto mt-8 w-full max-w-3xl">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/[0.10] bg-white/[0.06] p-2 backdrop-blur-md sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/[0.06] px-4 py-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-slate-400"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder={t("locationPlaceholder")}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <select
              className="cursor-pointer rounded-xl border-0 bg-white/[0.06] px-4 py-3 text-sm text-slate-300 outline-none"
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
              className="cursor-pointer rounded-xl border-0 bg-white/[0.06] px-4 py-3 text-sm text-slate-300 outline-none"
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
            <button className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-sky-400">
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
          <p className="mt-3 text-center text-xs text-slate-500">
            {t("popularLabel")} {brand.popularAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-slate-600">
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
