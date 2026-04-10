"use client";

import Link from "next/link";

import { Button, LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TopbarProps {
  onMenuClick: () => void;
}

export const Topbar = ({ onMenuClick }: TopbarProps) => (
  <header className="sticky top-0 z-20 flex items-center justify-between rounded-[2rem] border border-white/70 bg-white/90 px-4 py-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur md:px-6">
    <div className="flex items-center gap-3">
      <Button className="lg:hidden" onClick={onMenuClick} type="button" variant="secondary">
        Menu
      </Button>
      <div>
        <p className="text-sm font-semibold text-slate-950">Operacion Comercial</p>
        <p className="text-sm text-slate-500">Vista base del ecosistema inmobiliario</p>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <Badge tone="success">Mocks listos</Badge>
      <Link className="hidden text-sm font-medium text-slate-500 hover:text-slate-900 md:inline-flex" href="/projects/sierra-verde">
        Ver landing demo
      </Link>
      <LinkButton href="/login" variant="secondary">
        Login
      </LinkButton>
    </div>
  </header>
);
