"use client";

import type { AppLocale } from "@/i18n/locale";

import { CrmShellFooter } from "./crm-shell-footer";
import { CrmShellHero } from "./crm-shell-hero";
import { CrmShellTopNav } from "./crm-shell-top-nav";
import { CrmOperationsWorkspace } from "./crm-operations-workspace";

export function CrmShell({ locale }: { locale: AppLocale }) {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FBFAF7] text-[#111111]">
      <div className="w-full bg-[#FBFAF7]">
        <CrmShellTopNav locale={locale} />
        <CrmShellHero locale={locale} />

        <CrmOperationsWorkspace locale={locale} />

        <CrmShellFooter />
      </div>
    </main>
  );
}
