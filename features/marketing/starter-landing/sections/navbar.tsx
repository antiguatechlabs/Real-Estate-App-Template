import Link from "next/link";
import { useTranslations } from "next-intl";

import { locales, type AppLocale } from "@/i18n/locale";

import type { BrandConfig } from "../types";

const navItems = [
  { href: "#featured-properties", key: "buy" },
  { href: "#featured-properties", key: "rent" },
  { href: "#how-it-works", key: "sell" },
  { href: "#featured-agents", key: "agents" },
] as const;

type NavbarProps = {
  brand: BrandConfig;
  locale: AppLocale;
};

export function Navbar({ brand, locale }: NavbarProps) {
  const t = useTranslations("marketingStarterLanding.navbar");
  const tLocale = useTranslations("common.locale");

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" fill="white" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            {brand.agencyName}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {t(`links.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            aria-label={tLocale("label")}
            className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 sm:flex"
          >
            {locales.map((nextLocale) => {
              const isActive = nextLocale === locale;

              return (
                <Link
                  key={nextLocale}
                  href={`/${nextLocale}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tLocale(`options.${nextLocale}`)}
                </Link>
              );
            })}
          </div>

          <a
            href={brand.signInHref}
            className="hidden text-sm text-slate-400 transition-colors duration-200 hover:text-white sm:block"
          >
            {t("signIn")}
          </a>
          <a
            href={brand.primaryCtaHref}
            className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-400"
          >
            {t("getStarted")}
          </a>
        </div>
      </div>
    </nav>
  );
}
