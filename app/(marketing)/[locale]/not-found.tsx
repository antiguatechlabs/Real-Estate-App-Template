import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function MarketingNotFoundPage() {
  const t = useTranslations("marketingStarterLanding.notFound");
  const locale = useLocale();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20 text-slate-50">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-14 text-center shadow-2xl shadow-sky-950/20 backdrop-blur">
        <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
          {t("eyebrow")}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}`}
            className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-400"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/#featured-properties`}
            className="rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-sky-500/30 hover:text-white"
          >
            {t("browseProperties")}
          </Link>
        </div>
        <p className="mt-12 text-xs uppercase tracking-[0.2em] text-slate-600">
          {t("footer")}
        </p>
      </section>
    </main>
  );
}
