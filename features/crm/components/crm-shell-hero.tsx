import type { AppLocale } from "@/i18n/locale";

import { crmCopy } from "../lib/crm-locale";

import { ShellButton } from "./crm-shell-controls";

type CrmShellHeroProps = {
  locale: AppLocale;
};

function HeroImage() {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-[#D8D2C8] bg-[#111111] sm:min-h-[260px] lg:min-h-[300px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-90 grayscale"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(17,17,17,0.02), rgba(17,17,17,0.34)), url('https://picsum.photos/seed/crm-operations-office/1200/680')",
        }}
      />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/20 bg-[#111111]/70 px-3 text-xs font-semibold text-white backdrop-blur">
          <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
            <path
              d="M7 10V8a5 5 0 0 1 10 0v2M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
          Sesion protegida
        </span>
        <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/20 bg-[#111111]/70 px-3 text-xs font-semibold text-white backdrop-blur">
          <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 7c0-1.66 3.13-3 7-3s7 1.34 7 3-3.13 3-7 3-7-1.34-7-3Zm0 0v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
          Tenant estable via BFF
        </span>
      </div>
    </div>
  );
}

export function CrmShellHero({ locale }: CrmShellHeroProps) {
  const copy = crmCopy[locale];

  return (
    <section
      id="resumen"
      className="mx-auto grid w-full max-w-[1480px] gap-6 px-4 pb-8 pt-32 sm:px-5 md:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(380px,1fr)] lg:items-center lg:pb-10 lg:pt-36 xl:grid-cols-[minmax(0,0.72fr)_minmax(420px,1fr)]"
    >
      <div className="min-w-0">
        <h1 className="max-w-2xl text-[clamp(2.25rem,12vw,5.4rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#111111] [font-family:var(--crm-serif)]">
          {copy.shell.heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#5E625C]">
          {copy.operations.title}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ShellButton href="#operacion">{copy.actions.enterPanel}</ShellButton>
          <ShellButton href="#lotes" variant="secondary">
            {copy.actions.viewFlow}
          </ShellButton>
        </div>
      </div>
      <HeroImage />
    </section>
  );
}
