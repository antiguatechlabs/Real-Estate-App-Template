import { useTranslations } from "next-intl";

import type { AgentData } from "../types";

type FeaturedAgentsProps = {
  agents: AgentData[];
};

export function FeaturedAgents({ agents }: FeaturedAgentsProps) {
  const t = useTranslations("marketingStarterLanding.agents");

  return (
    <section id="featured-agents" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">{t("description")}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/20"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-2xl font-bold text-white ring-4 ring-sky-500/20">
                {agent.initials}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{agent.name}</p>
                <p className="mt-0.5 text-sm text-slate-400">
                  {t(`specialties.${agent.specialtyKey}`)}
                </p>
              </div>
              <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                {t("activeListings", { count: agent.listings })}
              </span>
              <button className="w-full cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.06] py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-sky-500/30 hover:bg-sky-500/20 hover:text-sky-300">
                {t("contactAgent")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
