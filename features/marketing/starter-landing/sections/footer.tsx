import Link from "next/link";
import { useTranslations } from "next-intl";
import type { AppLocale } from "@/i18n/locale";

import type { BrandConfig } from "../types";

const footerGroups = [
  { key: "company", links: ["about", "careers", "press", "contact"] },
  { key: "properties", links: ["forSale", "forRent", "commercial", "luxury"] },
  {
    key: "resources",
    links: ["blog", "marketReports", "mortgageCalculator", "helpCenter"],
  },
] as const;

type FooterProps = {
  brand: BrandConfig;
  locale: AppLocale;
};

export function Footer({ brand, locale }: FooterProps) {
  const t = useTranslations("marketingStarterLanding.footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-white">{brand.agencyName}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              {t("description", { city: brand.city })}
            </p>
            <div className="flex gap-3">
              <a
                href={brand.socialLinks.twitter}
                aria-label={t("social.twitter")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06] transition-colors duration-200 hover:bg-white/[0.10]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={brand.socialLinks.linkedin}
                aria-label={t("social.linkedin")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06] transition-colors duration-200 hover:bg-white/[0.10]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={brand.socialLinks.instagram}
                aria-label={t("social.instagram")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06] transition-colors duration-200 hover:bg-white/[0.10]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.key}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {t(`groups.${group.key}.title`)}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((linkKey) => (
                  <li key={linkKey}>
                    <a
                      href="#cta"
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-white"
                    >
                      {t(`groups.${group.key}.links.${linkKey}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-xs text-slate-600 sm:flex-row">
          <p>
            {t("copyright", {
              agencyName: brand.agencyName,
              year: currentYear,
            })}
          </p>
          <div className="flex gap-6">
            <a href="#cta" className="transition-colors duration-200 hover:text-slate-400">
              {t("legal.privacy")}
            </a>
            <a href="#cta" className="transition-colors duration-200 hover:text-slate-400">
              {t("legal.terms")}
            </a>
            <a href="#cta" className="transition-colors duration-200 hover:text-slate-400">
              {t("legal.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
