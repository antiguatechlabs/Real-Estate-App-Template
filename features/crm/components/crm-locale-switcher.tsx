import Link from "next/link";

import { locales, type AppLocale } from "@/i18n/locale";

type CrmLocaleSwitcherProps = {
  label: string;
  locale: AppLocale;
};

export function CrmLocaleSwitcher({ label, locale }: CrmLocaleSwitcherProps) {
  return (
    <div
      aria-label={label}
      className="hidden items-center rounded-lg border border-[#D8D2C8] bg-white p-1 sm:flex"
    >
      {locales.map((nextLocale) => {
        const isActive = nextLocale === locale;

        return (
          <Link
            key={nextLocale}
            href={`/api/crm-locale?locale=${nextLocale}`}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              isActive
                ? "bg-[#111111] !text-white [&_*]:!text-white"
                : "bg-transparent !text-[#111111] hover:bg-[#F7F6F2] [&_*]:!text-[#111111]"
            }`}
          >
            {nextLocale}
          </Link>
        );
      })}
    </div>
  );
}
