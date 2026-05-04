import Link from "next/link";

import type { AppLocale } from "@/i18n/locale";

import { crmNavLinks } from "../data/crm-content";
import { crmCopy } from "../lib/crm-locale";

import { BrandMark, SettingsLink, ShellButton } from "./crm-shell-controls";
import { CrmLocaleSwitcher } from "./crm-locale-switcher";

type CrmShellTopNavProps = {
  locale: AppLocale;
};

export function CrmShellTopNav({ locale }: CrmShellTopNavProps) {
  const copy = crmCopy[locale];

  return (
    <header className="fixed left-0 right-0 top-3 z-40 px-3 sm:px-4 md:px-6">
      <nav className="relative mx-auto flex min-h-[72px] w-full max-w-[1480px] flex-wrap items-center justify-between gap-3 overflow-hidden rounded-[16px] border border-white/50 bg-white/[0.025] px-4 py-3 antialiased shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.08),0_18px_48px_rgba(17,17,17,0.12)] transition-all duration-300 md:flex-nowrap md:px-6 md:py-0 xl:px-8">
        <div className="absolute inset-0 rounded-[16px] backdrop-blur-sm" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-tl from-white/30 via-transparent to-transparent opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full bg-white/90"
        />
        <Link
          href="/app"
          className="relative z-10 flex min-w-0 flex-1 items-center gap-3 md:flex-none"
        >
          <BrandMark />
          <span className="min-w-0">
            <span className="block text-base font-semibold tracking-tight">
              {copy.nav.controlHub}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E625C]">
              MERCAFARMA
            </span>
          </span>
        </Link>

        <div className="relative z-10 hidden items-center gap-6 text-sm font-medium text-[#343831] lg:flex">
          {crmNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-6 transition-colors hover:text-[#111111]"
            >
              {copy.nav.links[link.key]}
              {link.key === "resumen" && (
                <span className="absolute bottom-3 left-0 h-0.5 w-full bg-[#111111]" />
              )}
            </Link>
          ))}
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <CrmLocaleSwitcher label={copy.locale.label} locale={locale} />
          <SettingsLink />
          <ShellButton href="#lotes">{copy.actions.lots}</ShellButton>
        </div>
      </nav>
    </header>
  );
}
