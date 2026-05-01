"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import {
  crmCatalogs,
  crmCompanyFacts,
  crmDailySignals,
  crmNavLinks,
  crmOperationalWords,
  crmProjects,
  crmQuickActions,
  crmStackCards,
  crmTestimonials,
} from "../data/crm-content";

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
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles =
    variant === "primary"
      ? "border border-white/10 bg-slate-950 text-slate-50 shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:bg-slate-900"
      : "border border-white/12 bg-white/6 text-slate-50 hover:-translate-y-0.5 hover:bg-white/10";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}

function backgroundImage(seed: string, size: string) {
  return `linear-gradient(180deg, rgba(2, 6, 23, 0.12), rgba(2, 6, 23, 0.84)), url('https://picsum.photos/seed/${seed}/${size}')`;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
}

function FactRail({
  items,
}: {
  items: Array<{ label: string; value: string; note: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-md border border-white/10 bg-slate-950/65 p-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            {item.label}
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-50">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.note}</p>
        </div>
      ))}
    </div>
  );
}

function LinkStack({
  items,
}: {
  items: Array<{ label: string; description: string; href: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group block rounded-md border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:bg-white/[0.08]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-base font-medium text-slate-50">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200 transition-transform duration-300 group-hover:translate-x-1">
              Abrir
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CrmShell() {
  const rootRef = useRef<HTMLElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);
  const revealSectionRef = useRef<HTMLElement | null>(null);
  const pinTitleRef = useRef<HTMLDivElement | null>(null);
  const stackCardRefs = useRef<(HTMLElement | null)[]>([]);
  const testimonialRailRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (heroImageRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { scale: 1.08, opacity: 0.52 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroImageRef.current,
              start: "top 90%",
              end: "bottom 30%",
              scrub: true,
            },
          },
        );
      }

      const words = gsap.utils.toArray<HTMLElement>(".crm-reveal-word");
      if (words.length > 0 && revealSectionRef.current) {
        gsap.fromTo(
          words,
          { opacity: 0.12, y: 10 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: revealSectionRef.current,
              start: "top 70%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      }

      const cards = stackCardRefs.current.filter(Boolean) as HTMLElement[];
      if (cards.length > 0 && revealSectionRef.current && pinTitleRef.current) {
        ScrollTrigger.create({
          trigger: revealSectionRef.current,
          start: "top top+=120",
          end: "bottom bottom",
          pin: pinTitleRef.current,
          pinSpacing: false,
        });

        gsap.fromTo(
          cards,
          { y: 96, scale: 0.84, opacity: 0.2, filter: "brightness(0.72)" },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            ease: "none",
            stagger: 0.16,
            scrollTrigger: {
              trigger: revealSectionRef.current,
              start: "top 78%",
              end: "bottom 15%",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: rootRef },
  );

  const scrollTestimonialRail = (direction: -1 | 1) => {
    const rail = testimonialRailRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={rootRef}
      className="w-full max-w-full overflow-x-hidden bg-transparent text-slate-50"
    >
      <header className="sticky top-4 z-40 mx-auto flex w-full max-w-[1500px] justify-center px-4 pt-4">
        <nav className="flex w-full items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl md:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/5">
              <div
                aria-hidden="true"
                className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.65),transparent_46%),radial-gradient(circle_at_75%_75%,rgba(217,119,6,0.5),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-50">
                Control Hub
              </p>
              <p className="text-xs text-slate-400">CRM · MERCAFARMA</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {crmNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/app/admin"
              className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:bg-white/10 md:inline-flex"
            >
              Admin
            </Link>
            <Link
              href="/app/config"
              className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:bg-white/10 md:inline-flex"
            >
              Configuración
            </Link>
            <Link
              href="/es"
              className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:bg-white/10 md:inline-flex"
            >
              Landing
            </Link>
            <ShellButton href="#lotes">Abrir lotes</ShellButton>
          </div>
        </nav>
      </header>

      <section
        id="resumen"
        className="relative mx-auto w-full max-w-[1500px] px-4 pb-28 pt-8 md:pb-40 md:pt-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-8 -z-10 h-[620px] rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,32,0.92),rgba(4,9,20,0.78))] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
        />
        <div
          ref={heroImageRef}
          aria-hidden="true"
          className="absolute inset-x-4 top-8 -z-20 h-[620px] overflow-hidden rounded-[32px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2, 6, 23, 0.34), rgba(2, 6, 23, 0.9)), radial-gradient(circle at 50% 20%, rgba(34,197,94,0.12), transparent 36%), url('https://picsum.photos/seed/mercafarma-crm-hero/1920/1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative grid gap-16 pt-20 md:pt-28">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-100/70">
              CRM interno
            </p>
            <h1 className="mx-auto mt-5 max-w-6xl text-[clamp(2.8rem,4.6vw,5.5rem)] font-semibold leading-[0.94] tracking-tight text-slate-50">
              Controla{" "}
              <span
                className="inline-block h-[0.86em] w-24 translate-y-1 rounded-full align-middle ring-1 ring-white/18"
                style={{
                  backgroundImage:
                    "url('https://picsum.photos/seed/lots-strip/320/160')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />{" "}
              lotes, proyectos y sesión segura en una sola superficie viva.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Un panel operativo para empresa, catálogos y flujos diarios que mantiene
              el tenant estable, deja visible el contexto y reduce saltos entre pantallas.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ShellButton href="#empresa">Entrar al panel</ShellButton>
              <ShellButton href="#lotes" variant="secondary">
                Explorar lotes
              </ShellButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] py-4 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="crm-marquee flex min-w-max items-center gap-5 px-4 text-[11px] uppercase tracking-[0.38em] text-slate-300">
              {[...crmOperationalWords, ...crmOperationalWords].map((word, index) => (
                <span key={`${word}-${index}`} className="text-slate-200/90">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="empresa"
        className="mx-auto w-full max-w-[1500px] px-4 py-28 md:py-36"
      >
        <SectionHeading
          eyebrow="Contexto operativo"
          title="Una grilla densa para ver empresa, proyectos y accesos sin saltar entre pantallas."
          description="La home del CRM usa un bento compacto y exacto para que lo importante quede visible, con imagen, jerarquía y acciones bien separadas."
        />

        <div className="mt-12 grid grid-flow-dense grid-cols-12 auto-rows-[180px] gap-4">
          <article className="group col-span-12 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur md:col-span-7 md:row-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="flex flex-1 flex-col justify-between gap-6 md:flex-row">
                <div className="max-w-xl space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/70">
                    Empresa actual
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                    Mercafarma S.A.
                  </h3>
                  <p className="max-w-lg text-sm leading-7 text-slate-300">
                    MERCAFARMA vive aquí con moneda, zona horaria, idioma y permisos
                    listos para orquestar proyectos, catálogos y lotes sin salir de la app.
                  </p>
                </div>

                <div className="relative min-h-[200px] w-full max-w-[290px] overflow-hidden rounded-[22px] border border-white/10 bg-slate-900/70">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: backgroundImage("company-core", "900/700"),
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.58))]" />
                </div>
              </div>

              <FactRail items={crmCompanyFacts} />
            </div>
          </article>

          <article className="col-span-12 overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:col-span-5 md:row-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-emerald-200/70">
                    Proyectos
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    Operación activa
                  </h3>
                </div>
                <p className="text-sm text-slate-400">3 visibles</p>
              </div>

              <div className="space-y-4">
                {crmProjects.map((project) => (
                  <div
                    key={project.code}
                    className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4 transition-transform duration-500 ease-out hover:-translate-y-0.5 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-medium text-slate-50">
                          {project.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                          {project.code}
                        </p>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">
                        {project.status}
                      </p>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {project.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="col-span-12 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-amber-200/70">
                  Catálogos
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Salud de configuración
                </h3>
              </div>

              <div className="space-y-3">
                {crmCatalogs.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[18px] border border-white/10 bg-slate-950/70 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-slate-300">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-slate-50">
                        {item.value}
                      </p>
                    </div>
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        item.tone === "emerald"
                          ? "bg-emerald-300"
                          : item.tone === "cyan"
                            ? "bg-cyan-300"
                            : item.tone === "amber"
                              ? "bg-amber-300"
                              : "bg-violet-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="col-span-12 overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.34em] text-violet-200/70">
                Acciones rápidas
              </p>
              <LinkStack items={crmQuickActions} />
            </div>
          </article>

          <article className="col-span-12 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-sky-200/70">
                  Operación diaria
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  BFF, React Query y UI alineados en una sola superficie.
                </h3>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-900/55">
                <div
                  aria-hidden="true"
                  className="h-36 w-full grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: backgroundImage("operating-loop", "900/600"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <div className="grid gap-3">
                {crmDailySignals.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-white/10 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-slate-300">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-50">{item.value}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        ref={revealSectionRef}
        id="lotes"
        className="mx-auto w-full max-w-[1500px] px-4 py-28 md:py-36"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(320px,420px)_1fr]">
          <div
            ref={pinTitleRef}
            className="self-start rounded-[26px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-cyan-200/70">
              Deseo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              Un panel que escala con el equipo sin romper el foco.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              <span className="crm-reveal-word">La</span>{" "}
              <span className="crm-reveal-word">sesión</span>{" "}
              <span className="crm-reveal-word">vive</span>{" "}
              <span className="crm-reveal-word">segura,</span>{" "}
              <span className="crm-reveal-word">los</span>{" "}
              <span className="crm-reveal-word">proyectos</span>{" "}
              <span className="crm-reveal-word">se</span>{" "}
              <span className="crm-reveal-word">leen</span>{" "}
              <span className="crm-reveal-word">rápido</span>{" "}
              <span className="crm-reveal-word">y</span>{" "}
              <span className="crm-reveal-word">cada</span>{" "}
              <span className="crm-reveal-word">cambio</span>{" "}
              <span className="crm-reveal-word">de</span>{" "}
              <span className="crm-reveal-word">estado</span>{" "}
              <span className="crm-reveal-word">mantiene</span>{" "}
              <span className="crm-reveal-word">trazabilidad.</span>
            </p>
          </div>

          <div className="space-y-6">
            {crmStackCards.map((card, index) => (
              <article
                key={card.title}
                ref={(element) => {
                  stackCardRefs.current[index] = element;
                }}
                className="crm-stack-card group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur"
              >
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.34em] text-emerald-200/70">
                          Stack {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-sm text-cyan-200/70">{card.metric}</p>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                      {card.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ShellButton href="#empresa">Ver empresa</ShellButton>
                      <ShellButton href="/app/config" variant="secondary">
                        Ajustar tenant
                      </ShellButton>
                    </div>
                  </div>

                  <div className="relative min-h-[240px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: backgroundImage(card.image, "1200/900"),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.2),transparent_34%)]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="configuracion"
        className="mx-auto w-full max-w-[1500px] px-4 py-28 md:py-36"
      >
        <SectionHeading
          eyebrow="Contexto humano"
          title="Feedback operativo que acompaña la implementación sin hacer ruido."
          description="La navegación también deja espacio para contexto humano: qué se siente más rápido, qué baja fricción y qué mantiene estable la capa BFF."
        />

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollTestimonialRail(-1)}
              className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => scrollTestimonialRail(1)}
              className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
            >
              Siguiente
            </button>
          </div>
        </div>

        <div
          ref={testimonialRailRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none]"
        >
          {crmTestimonials.map((item) => (
            <article
              key={item.author}
              className="min-w-[340px] snap-center rounded-[26px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:min-w-[460px]"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grayscale contrast-125"
                    style={{
                      backgroundImage: backgroundImage(item.avatar, "240/240"),
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div>
                  <p className="text-lg font-medium leading-8 text-slate-50">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{item.author}</p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.96))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-amber-200/70">
                Acción
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                La aplicación ya tiene su cara operativa. Falta conectar la API y
                empezar a trabajar.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                La landing sigue en `/es` y `/en`. El CRM vive en `/app` con base visual
                lista para escalar a admin, configuración, lotes y módulos futuros.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ShellButton href="#resumen">Volver arriba</ShellButton>
              <ShellButton href="/app/admin" variant="secondary">
                Ir a admin
              </ShellButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-[1500px] px-4 pb-12">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>CRM interno · Real Estate App Template</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition-colors hover:text-slate-100" href="#resumen">
              Panel
            </Link>
            <Link className="transition-colors hover:text-slate-100" href="#empresa">
              Empresa
            </Link>
            <Link className="transition-colors hover:text-slate-100" href="#lotes">
              Lotes
            </Link>
            <Link className="transition-colors hover:text-slate-100" href="/app/config">
              Configuración
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes crm-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .crm-marquee {
          animation: crm-marquee 28s linear infinite;
        }

        .crm-stack-card:nth-child(2) {
          margin-top: -14px;
        }

        .crm-stack-card:nth-child(3) {
          margin-top: -14px;
        }

        .crm-stack-card {
          will-change: transform, opacity, filter;
        }

        .crm-reveal-word {
          display: inline-block;
          will-change: opacity, transform;
        }
      `}</style>
    </main>
  );
}
