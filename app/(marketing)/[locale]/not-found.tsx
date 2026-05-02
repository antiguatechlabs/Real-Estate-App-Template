import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function MarketingNotFoundPage() {
  const t = useTranslations("marketingStarterLanding.notFound");
  const locale = useLocale();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F3EC] px-4 py-20 text-[#1F2937]">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white px-6 py-12 text-center md:px-8 md:py-14">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2C7DA0]">
          {t("eyebrow")}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#12344D] sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#4B5563]">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}`}
            className="rounded-lg bg-[#12344D] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0F2A3D]"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/#featured-properties`}
            className="rounded-lg border border-[#D1D5DB] bg-[#F7F3EC] px-5 py-3 text-sm font-medium text-[#12344D] transition-colors duration-200 hover:border-[#D4A373]"
          >
            {t("browseProperties")}
          </Link>
        </div>
        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-[#4B5563]">
          {t("footer")}
        </p>
      </section>
    </main>
  );
}
