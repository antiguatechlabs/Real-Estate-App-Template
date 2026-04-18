import { useTranslations } from "next-intl";

import type { AgentData } from "../types";

type FeaturedAgentsProps = {
  agents: AgentData[];
};

export function FeaturedAgents({ agents }: FeaturedAgentsProps) {
  const t = useTranslations("marketingStarterLanding.agents");

  return (
    <section
      id="featured-agents"
      className="scroll-mt-24 bg-[#EFE8DD]/70 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#2C7DA0]">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white text-center shadow-[0_24px_60px_rgba(18,52,77,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(18,52,77,0.12)]"
            >
              <div className="h-1 bg-gradient-to-r from-[#12344D] via-[#2C7DA0] to-[#D4A373]" aria-hidden="true" />

              <div className="flex flex-1 flex-col gap-4 p-8">
                <div className="flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#12344D] to-[#2C7DA0] text-2xl font-bold text-white ring-4 ring-[#F7F3EC] transition-transform duration-300 group-hover:scale-105">
                    {agent.initials}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold tracking-tight text-[#12344D]">
                    {agent.name}
                  </p>
                  <p className="mt-1 text-sm text-[#4B5563]">
                    {t(`specialties.${agent.specialtyKey}`)}
                  </p>
                </div>

                <div className="mx-auto inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F7F3EC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2C7DA0]">
                  {t("activeListings", { count: agent.listings })}
                </div>

                <button className="mt-2 w-full cursor-pointer rounded-xl bg-[#12344D] px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0F2A3D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]">
                  {t("contactAgent")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
