import { useTranslations } from "next-intl";

import type { PropertyCardData } from "../types";

type FeaturedPropertiesProps = {
  properties: PropertyCardData[];
};

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const t = useTranslations("marketingStarterLanding.featuredProperties");

  return (
    <section id="featured-properties" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
          </div>
          <a
            href="#cta"
            className="hidden items-center gap-1 text-sm text-slate-400 transition-colors duration-200 hover:text-sky-400 sm:flex"
          >
            {t("viewAll")}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-950/40"
            >
              <div
                className={`relative flex h-52 items-end bg-gradient-to-br ${property.gradient} p-4`}
              >
                <span className="rounded-lg bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
                  {property.price}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-slate-200 backdrop-blur-sm">
                  {t(`types.${property.typeKey}`)}
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div>
                  <p className="font-semibold text-white">{property.address}</p>
                  <p className="text-sm text-slate-400">{property.city}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {t("beds", { count: property.beds })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 6l2 2-2 5 3.5 3.5L16 15l2-2" />
                      <path d="M5 8a7 7 0 0014 0" />
                    </svg>
                    {t("baths", { count: property.baths })}
                  </span>
                  <span>{t("sqft", { count: property.sqft })}</span>
                </div>

                <button className="w-full cursor-pointer rounded-xl border border-sky-500/30 py-2.5 text-center text-sm font-medium text-sky-400 transition-colors duration-200 hover:bg-sky-500/10">
                  {t("viewDetails")}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
