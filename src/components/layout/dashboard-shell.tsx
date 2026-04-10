"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { cn } from "@/utils/cn";

interface DashboardShellProps {
  children: React.ReactNode;
}

export const DashboardShell = ({ children }: DashboardShellProps) => {
  const mobileNav = useMobileNav();

  return (
    <div className="min-h-screen bg-[var(--color-app-bg)]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 p-4 md:p-6">
        <div className="hidden w-[320px] shrink-0 lg:block">
          <Sidebar />
        </div>

        <div
          className={cn(
            "fixed inset-0 z-40 bg-slate-950/35 transition lg:hidden",
            mobileNav.isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={mobileNav.close}
        />

        <div
          className={cn(
            "fixed inset-y-4 left-4 z-50 w-[88vw] max-w-[320px] transition-transform lg:hidden",
            mobileNav.isOpen ? "translate-x-0" : "-translate-x-[110%]",
          )}
        >
          <Sidebar onNavigate={mobileNav.close} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <Topbar onMenuClick={mobileNav.toggle} />
          <main className="flex-1 rounded-[2rem] border border-white/60 bg-white/65 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)] backdrop-blur md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
