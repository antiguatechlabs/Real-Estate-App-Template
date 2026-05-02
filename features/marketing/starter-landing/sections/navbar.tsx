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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#F7F3EC]/90 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-[#E5E7EB] bg-white/90 px-4 py-2 shadow-[0_18px_50px_rgba(18,52,77,0.08)]">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12344D] shadow-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" fill="#F7F3EC" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#12344D]">
            {brand.agencyName}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="text-sm text-[#4B5563] transition-colors duration-200 hover:text-[#12344D]"
              >
                {t(`links.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            aria-label={tLocale("label")}
            className="hidden items-center rounded-full border border-[#E5E7EB] bg-[#F7F3EC] p-1 sm:flex"
          >
            {locales.map((nextLocale) => {
              const isActive = nextLocale === locale;

              return (
                <Link
                  key={nextLocale}
                  href={`/${nextLocale}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                    isActive ? "bg-white" : "hover:text-[#12344D]"
                  }`}
                  style={{ color: isActive ? "#12344D" : "#4B5563" }}
                >
                  {tLocale(`options.${nextLocale}`)}
                </Link>
              );
            })}
          </div>

          <a
            href={brand.signInHref}
            className="hidden text-sm text-[#4B5563] transition-colors duration-200 hover:text-[#12344D] sm:block"
          >
            {t("signIn")}
          </a>
          <a
            href={brand.primaryCtaHref}
            className="rounded-full bg-[#12344D] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F2A3D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
          >
            {t("getStarted")}
          </a>
        </div>
      </div>
    </nav>
  );
}
