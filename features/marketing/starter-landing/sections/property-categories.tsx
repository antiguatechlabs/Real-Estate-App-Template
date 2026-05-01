import { useTranslations } from "next-intl";

const categories = [
  { accent: "bg-[#12344D]", key: "residential", surface: "bg-white" },
  { accent: "bg-[#2C7DA0]", key: "commercial", surface: "bg-[#F7F3EC]" },
  { accent: "bg-[#D4A373]", key: "luxury", surface: "bg-white" },
  { accent: "bg-[#12344D]", key: "land", surface: "bg-[#F7F3EC]" },
] as const;

const categoryIcons = [
  <svg
    key="house"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg
    key="building"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="7" x2="9" y2="7.01" />
    <line x1="15" y1="7" x2="15" y2="7.01" />
    <line x1="9" y1="12" x2="9" y2="12.01" />
    <line x1="15" y1="12" x2="15" y2="12.01" />
    <line x1="9" y1="17" x2="9" y2="17.01" />
    <line x1="15" y1="17" x2="15" y2="17.01" />
  </svg>,
  <svg
    key="star"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  <svg
    key="map"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>,
];

export function PropertyCategories() {
  const t = useTranslations("marketingStarterLanding.propertyCategories");

  return (
    <section
      id="property-categories"
      className="scroll-mt-24 bg-[#F7F3EC] px-4 py-20 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#2C7DA0]">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={category.key}
              href="#featured-properties"
              className={`group relative flex cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-[#E5E7EB] ${category.surface} p-6 text-center transition-colors duration-300 hover:border-[#D4A373] md:p-8`}
            >
              <div className={`absolute left-0 right-0 top-0 h-1 ${category.accent}`} aria-hidden="true" />
              <div className="relative z-10 text-[#2C7DA0] transition-colors duration-200 group-hover:text-[#12344D]">
                {categoryIcons[index]}
              </div>
              <div className="relative z-10">
                <p className="font-semibold text-[#12344D]">{t(`items.${category.key}.label`)}</p>
                <p className="mt-1 text-xs text-[#4B5563]">
                  {t(`items.${category.key}.count`)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
