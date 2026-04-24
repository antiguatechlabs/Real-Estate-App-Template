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
    <section className="bg-[#F7F3EC] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E5E7EB] bg-white px-6 py-8 shadow-[0_18px_50px_rgba(18,52,77,0.06)]">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={stat.key}
            className={`flex flex-col items-center text-center ${
              index < 3 ? "md:border-r md:border-[#E5E7EB]" : ""
            }`}
          >
            <span className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-[#4B5563]">{t(stat.key)}</span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
