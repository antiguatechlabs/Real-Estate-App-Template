import { useTranslations } from "next-intl";

import type { PropertyCardData } from "../types";

type FeaturedPropertiesProps = {
  properties: PropertyCardData[];
};

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const t = useTranslations("marketingStarterLanding.featuredProperties");

  return (
    <section
      id="featured-properties"
      className="scroll-mt-24 bg-[#F7F3EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#2C7DA0]">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
          </div>
          <a
            href="#cta"
            className="hidden items-center gap-1 text-sm font-medium text-[#4B5563] transition-colors duration-200 hover:text-[#12344D] sm:flex"
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
              className="group overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(18,52,77,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(18,52,77,0.14)]"
            >
              <div
                className={`relative flex h-56 items-end overflow-hidden bg-gradient-to-br ${property.gradient} p-5`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,52,77,0.08)_0%,rgba(18,52,77,0.58)_100%)]" />
                <span className="relative rounded-full bg-[#D4A373] px-3 py-1 text-sm font-semibold text-[#12344D] shadow-sm">
                  {property.price}
                </span>
                <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {t(`types.${property.typeKey}`)}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="font-semibold text-[#12344D]">{property.address}</p>
                  <p className="text-sm text-[#4B5563]">{property.city}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-[#2C7DA0]">
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
                  <span className="text-[#4B5563]">{t("sqft", { count: property.sqft })}</span>
                </div>

                <button className="w-full cursor-pointer rounded-xl border border-[#D1D5DB] bg-[#F7F3EC] py-3 text-center text-sm font-semibold text-[#12344D] transition-colors duration-200 hover:border-[#D4A373] hover:bg-[#EFE8DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]">
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
