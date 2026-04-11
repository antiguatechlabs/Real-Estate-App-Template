import { useTranslations } from "next-intl";

const categories = [
  { color: "from-sky-900/40 to-slate-900", key: "residential" },
  { color: "from-blue-900/40 to-slate-900", key: "commercial" },
  { color: "from-indigo-900/40 to-slate-900", key: "luxury" },
  { color: "from-violet-900/40 to-slate-900", key: "land" },
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
    <section id="property-categories" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={category.key}
              href="#featured-properties"
              className={`group relative flex cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${category.color} p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/40`}
            >
              <div className="absolute inset-0 rounded-2xl bg-sky-500/0 transition-all duration-300 group-hover:bg-sky-500/5" />
              <div className="relative z-10 text-sky-300 transition-colors duration-200 group-hover:text-sky-200">
                {categoryIcons[index]}
              </div>
              <div className="relative z-10">
                <p className="font-semibold text-white">{t(`items.${category.key}.label`)}</p>
                <p className="mt-1 text-xs text-slate-400">
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
