"use client";

import Link from "next/link";

import { dashboardNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { SidebarLink } from "@/components/navigation/sidebar-link";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  onNavigate?: () => void;
}

export const Sidebar = ({ onNavigate }: SidebarProps) => (
  <aside className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
    <Link className="flex items-start gap-3 rounded-2xl px-3 py-2" href="/dashboard" onClick={onNavigate}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
        RS
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-950">{siteConfig.shortName}</p>
        <p className="text-xs text-slate-500">Template base CRM inmobiliario</p>
      </div>
    </Link>

    <div className="mt-6 rounded-3xl bg-slate-950 px-4 py-4 text-white">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Estado</p>
      <p className="mt-2 text-sm font-semibold">Arquitectura lista para empresas, proyectos y pipeline.</p>
      <Badge className="mt-4 bg-white/10 text-white" tone="neutral">
        Enterprise starter
      </Badge>
    </div>

    <nav className="mt-6 flex-1 space-y-1">
      {dashboardNavigation.map((item) => (
        <SidebarLink key={item.href} item={item} onNavigate={onNavigate} />
      ))}
    </nav>

    <div className="rounded-3xl border border-dashed border-slate-200 px-4 py-4 text-sm text-slate-500">
      Zona lista para permisos, multitenencia y shortcuts operativos.
    </div>
  </aside>
);
