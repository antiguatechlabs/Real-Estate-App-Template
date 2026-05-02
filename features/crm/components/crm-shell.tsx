"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { Tooltip } from "@/components/ui/tooltip";
import type { AppLocale } from "@/i18n/locale";

import { CrmLocaleSwitcher } from "./crm-locale-switcher";
import { CrmOperationsWorkspace } from "./crm-operations-workspace";
import {
  crmCatalogs,
  crmCompanyFacts,
  crmDailySignals,
  crmNavLinks,
  crmProjects,
  crmQuickActions,
  crmStackCards,
  crmTestimonials,
} from "../data/crm-content";
import { crmCopy } from "../lib/crm-locale";

gsap.registerPlugin(ScrollTrigger);

function ShellButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-transform duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "border border-[#111111] bg-[#111111] !text-white hover:bg-[#333333] [&_*]:!text-white"
      : "border border-[#D8D2C8] bg-[#FBFAF7] !text-[#111111] hover:border-[#111111] [&_*]:!text-[#111111]";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}

function backgroundImage(seed: string) {
  return `linear-gradient(180deg, rgba(17, 17, 17, 0.02), rgba(17, 17, 17, 0.18)), url('https://picsum.photos/seed/${seed}/1200/900')`;
}

function SplitWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="crm-reveal-word inline-block opacity-20">
          {word}{" "}
        </span>
      ))}
    </>
  );
}

function SectionHeading({
  title,
  description,
  tooltip,
}: {
  title: string;
  description?: string;
  tooltip?: string;
}) {
  return (
    <div className="flex max-w-5xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <h2 className="min-w-0 max-w-4xl break-words text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#111111]">
        {title}
      </h2>
      {(description || tooltip) && (
        <div className="flex min-w-0 max-w-sm items-start gap-3 text-sm leading-6 text-[#5E625C]">
          {description && <p>{description}</p>}
          {tooltip && <Tooltip content={tooltip} />}
        </div>
      )}
    </div>
  );
}

function FactCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="flex min-w-0 items-start justify-between gap-4 border-t border-[#E5E1D8] py-4">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#74776F]">
          {label}
        </p>
        <p className="mt-1 break-words text-xl font-semibold tracking-tight text-[#111111]">
          {value}
        </p>
      </div>
      <Tooltip content={note} />
    </article>
  );
}

function ProjectAccordion() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-[#E5E1D8] bg-[#E5E1D8]">
      {crmProjects.map((project) => (
        <article
          key={project.code}
          className="group min-w-0 bg-[#FBFAF7] p-4 transition-colors duration-300 hover:bg-white"
        >
          <div className="flex min-w-0 items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="break-words text-lg font-semibold tracking-tight text-[#111111]">
                {project.name}
              </p>
              <p className="mt-1 break-words text-xs uppercase tracking-[0.14em] text-[#74776F]">
                {project.code}
              </p>
            </div>
            <Tooltip content={project.note} />
          </div>
          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-[#ECE7DE]">
              <div
                className="h-full rounded-full bg-[#111111] transition-all duration-700 group-hover:bg-[#D4A373]"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-[#5E625C]">{project.status}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CrmShell({ locale }: { locale: AppLocale }) {
  const copy = crmCopy[locale];
  const rootRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const revealRef = useRef<HTMLElement | null>(null);
  const testimonialRailRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const images = imageRefs.current.filter(Boolean) as HTMLElement[];

      images.forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.86, opacity: 0.55 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      });

      const words = gsap.utils.toArray<HTMLElement>(".crm-reveal-word");
      if (words.length > 0 && revealRef.current) {
        gsap.to(words, {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top 70%",
            end: "bottom 45%",
            scrub: true,
          },
        });
      }
    },
    { scope: rootRef },
  );

  const scrollTestimonialRail = (direction: -1 | 1) => {
    testimonialRailRef.current?.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={rootRef}
      className="w-full max-w-full overflow-x-hidden px-4 pb-10 text-[#111111]"
    >
      <header className="sticky top-3 z-40 mx-auto flex w-full max-w-7xl justify-center pt-3">
        <nav className="flex w-full items-center justify-between gap-3 rounded-xl border border-[#E5E1D8] bg-[#FBFAF7]/90 px-3 py-3 backdrop-blur-xl md:px-4">
          <Link href="/app" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-9 w-9 rounded-lg border border-[#E5E1D8] bg-cover bg-center"
              style={{ backgroundImage: backgroundImage("minimal-crm-mark") }}
            />
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-tight">
                {copy.nav.controlHub}
              </span>
              <span className="block text-xs text-[#74776F]">MERCAFARMA</span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 text-sm text-[#5E625C] md:flex">
            {crmNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#111111]"
              >
                {copy.nav.links[link.key]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <CrmLocaleSwitcher label={copy.locale.label} locale={locale} />
            <Link
              href="/app/config"
              className="hidden rounded-md border border-[#D8D2C8] bg-white px-3 py-2 text-sm font-medium !text-[#111111] transition-colors hover:border-[#111111] sm:inline-flex [&_*]:!text-[#111111]"
            >
              {copy.nav.config}
            </Link>
            <ShellButton href="#lotes">{copy.actions.lots}</ShellButton>
          </div>
        </nav>
      </header>

      <section
        id="resumen"
        className="mx-auto grid w-full max-w-7xl gap-10 pb-24 pt-20 md:grid-cols-[1fr_0.72fr] md:pb-36 md:pt-28"
      >
        <div className="flex flex-col justify-center">
          <h1 className="max-w-6xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#111111]">
            {copy.shell.heroTitle.split(" lotes ")[0]}{" "}
            <span
              aria-hidden="true"
              className="mx-1 inline-block h-[0.72em] w-24 translate-y-1 rounded-lg bg-cover bg-center align-middle grayscale md:w-32"
              style={{ backgroundImage: backgroundImage("quiet-real-estate-ops") }}
            />{" "}
            {locale === "es" ? "lotes con menos pantalla y más foco." : "lots with less screen and more focus."}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5E625C] md:text-lg">
            {copy.shell.heroBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ShellButton href="#empresa">{copy.actions.enterPanel}</ShellButton>
            <ShellButton href="#lotes" variant="secondary">
              {copy.actions.viewFlow}
            </ShellButton>
          </div>
        </div>

        <div className="group relative min-h-[420px] overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#111111] md:min-h-[560px]">
          <div
            ref={(element) => {
              imageRefs.current[0] = element;
            }}
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-90 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: backgroundImage("minimal-crm-hero") }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(180deg,rgba(17,17,17,0.05),rgba(17,17,17,0.58))]" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="rounded-xl border border-white/20 bg-[#FBFAF7]/92 p-4 backdrop-blur">
              <div className="flex min-w-0 items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#111111]">
                    {copy.shell.sessionProtected}
                  </p>
                  <p className="mt-1 text-sm text-[#5E625C]">
                    {copy.shell.tenantStable}
                  </p>
                </div>
                <Tooltip content="La cookie httpOnly y el header tenant-aware se resuelven fuera del navegador." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="empresa"
        className="mx-auto w-full max-w-7xl py-24 md:py-36"
      >
        <SectionHeading
          title={copy.shell.sectionTitle}
          description={copy.shell.sectionBody}
          tooltip="Esta sección reemplaza el dashboard denso por lectura progresiva: dato, estado y acción."
        />

        <div className="mt-10 grid grid-flow-dense gap-px overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#E5E1D8] lg:grid-cols-12 lg:auto-rows-[auto] xl:auto-rows-[230px]">
          <article className="min-w-0 bg-[#FBFAF7] p-5 lg:col-span-7 lg:row-span-2 lg:p-7">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="grid gap-6 xl:grid-cols-[minmax(280px,1fr)_240px]">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#74776F]">
                    {copy.shell.companyCurrent}
                  </p>
                  <h3 className="mt-2 break-words text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#111111] xl:text-[clamp(3rem,4.4vw,4.75rem)]">
                    Mercafarma S.A.
                  </h3>
                </div>
                <div className="group overflow-hidden rounded-xl border border-[#E5E1D8] bg-white">
                  <div
                    ref={(element) => {
                      imageRefs.current[1] = element;
                    }}
                    aria-hidden="true"
                    className="h-48 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 xl:h-full"
                    style={{ backgroundImage: backgroundImage("company-core") }}
                  />
                </div>
              </div>

              <div className="grid gap-0 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                {crmCompanyFacts.map((item) => (
                  <FactCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </article>

          <article className="min-w-0 bg-white p-5 lg:col-span-5 lg:p-7">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex min-w-0 items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#74776F]">
                    {copy.shell.projects}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {copy.shell.operationActive}
                  </h3>
                </div>
                <Tooltip content={copy.shell.projectTooltip} />
              </div>
              <ProjectAccordion />
            </div>
          </article>

          <article className="min-w-0 bg-[#FBFAF7] p-5 lg:col-span-5 lg:p-7">
            <div className="grid h-full gap-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#74776F]">
                  {copy.shell.actions}
                </p>
                <h3 className="mt-2 break-words text-2xl font-semibold tracking-tight">
                  {copy.shell.action}
                </h3>
              </div>
              <div className="space-y-2">
                {crmQuickActions.slice(0, 3).map((item) => (
                  <div
                    key={item.label}
                    className="group flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#E5E1D8] bg-white px-3 py-3 text-sm font-medium text-[#111111] transition-colors hover:border-[#111111]"
                  >
                    <Link
                      href={item.href}
                      className="min-w-0 break-words transition-colors hover:text-[#5E625C]"
                    >
                      {item.label}
                    </Link>
                    <Tooltip content={item.description} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        ref={revealRef}
        id="lotes"
        className="mx-auto grid w-full max-w-7xl gap-10 py-24 md:grid-cols-[0.85fr_1.15fr] md:py-36"
      >
        <div className="self-start">
          <SectionHeading
            title="Menos explicación. Más trazabilidad."
            tooltip="El texto largo aparece solo cuando el usuario pide contexto."
          />
          <p className="mt-8 max-w-xl text-xl leading-9 text-[#343831] md:text-2xl">
            <SplitWords text={copy.shell.desireText} />
          </p>
        </div>

        <div className="space-y-4">
          {crmStackCards.map((card, index) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#FBFAF7]"
            >
              <div className="grid gap-px bg-[#E5E1D8] md:grid-cols-[1fr_0.78fr]">
                <div className="bg-[#FBFAF7] p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#74776F]">
                        {card.metric}
                      </p>
                        <h3 className="mt-2 break-words text-2xl font-semibold tracking-tight text-[#111111] md:text-3xl">
                        {card.title}
                      </h3>
                    </div>
                    <Tooltip content={card.description} />
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ShellButton href="#empresa">Ver panel</ShellButton>
                    <ShellButton href="/app/config" variant="secondary">
                      Ajustes
                    </ShellButton>
                  </div>
                </div>

                <div className="overflow-hidden bg-white">
                  <div
                    ref={(element) => {
                      imageRefs.current[index + 2] = element;
                    }}
                    aria-hidden="true"
                    className="h-56 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
                    style={{ backgroundImage: backgroundImage(card.image) }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="configuracion"
        className="mx-auto w-full max-w-7xl py-24 md:py-36"
      >
        <SectionHeading
          title={copy.shell.settingsVisible}
          description={copy.shell.catalogHint}
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#E5E1D8] md:grid-cols-2">
                <div className="min-w-0 bg-[#FBFAF7] p-5 md:p-7">
            <p className="text-sm font-medium text-[#74776F]">{copy.shell.catalogs}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {crmCatalogs.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#E5E1D8] bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-[#5E625C]">{item.label}</p>
                      <p className="mt-1 text-xl font-semibold text-[#111111]">
                        {item.value}
                      </p>
                    </div>
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4A373]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 md:p-7">
            <p className="text-sm font-medium text-[#74776F]">
              {copy.shell.dailySignals}
            </p>
            <div className="mt-5 space-y-1">
              {crmDailySignals.map((item) => (
                <FactCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-[#111111] bg-[#111111] p-6 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {copy.shell.connectedTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
                {copy.shell.connectedCta}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ShellButton href="#resumen" variant="secondary">
                {copy.actions.backTop}
              </ShellButton>
              <ShellButton href="/app/admin" variant="secondary">
                {copy.config.primary}
              </ShellButton>
            </div>
          </div>
        </div>
      </section>

      <CrmOperationsWorkspace locale={locale} />

      <section className="mx-auto w-full max-w-7xl pb-20">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => scrollTestimonialRail(-1)}
              className="rounded-md border border-[#D8D2C8] bg-[#FBFAF7] px-4 py-2 text-sm font-semibold !text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] [&_*]:!text-[#111111]"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => scrollTestimonialRail(1)}
              className="rounded-md border border-[#D8D2C8] bg-[#FBFAF7] px-4 py-2 text-sm font-semibold !text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] [&_*]:!text-[#111111]"
          >
            Siguiente
          </button>
        </div>

        <div
          ref={testimonialRailRef}
          className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none]"
        >
          {crmTestimonials.map((item) => (
            <article
              key={item.author}
              className="min-w-[280px] snap-center rounded-2xl border border-[#E5E1D8] bg-[#FBFAF7] p-5 md:min-w-[420px]"
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 shrink-0 rounded-xl bg-cover bg-center grayscale"
                  style={{ backgroundImage: backgroundImage(item.avatar) }}
                />
                <div>
                  <p className="text-base font-medium leading-7 text-[#111111]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#111111]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#74776F]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl border-t border-[#E5E1D8] py-8 text-sm text-[#74776F]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>CRM · Real Estate App Template</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition-colors hover:text-[#111111]" href="#resumen">
              {copy.nav.links.resumen}
            </Link>
            <Link className="transition-colors hover:text-[#111111]" href="#empresa">
              {copy.nav.links.empresa}
            </Link>
            <Link className="transition-colors hover:text-[#111111]" href="#lotes">
              {copy.nav.links.lotes}
            </Link>
            <Link className="transition-colors hover:text-[#111111]" href="/es">
              {copy.shell.backLanding}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
