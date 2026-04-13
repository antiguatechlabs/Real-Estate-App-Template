import { useTranslations } from "next-intl";

const stats = [
  { key: "propertiesListed", value: "12,400+" },
  { key: "citiesCovered", value: "48" },
  { key: "satisfiedClients", value: "9,800+" },
  { key: "averageRating", value: "4.9★" },
] as const;

export function Stats() {
  const t = useTranslations("marketingStarterLanding.stats.items");

  return (
    <section className="border-y border-white/[0.06] bg-slate-900/50">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={stat.key}
            className={`flex flex-col items-center text-center ${
              index < 3 ? "md:border-r md:border-white/[0.06]" : ""
            }`}
          >
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="mt-1 text-sm text-slate-400">{t(stat.key)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
