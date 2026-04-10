"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavigationItem } from "@/config/navigation";
import { cn } from "@/utils/cn";

interface SidebarLinkProps {
  item: NavigationItem;
  onNavigate?: () => void;
}

export const SidebarLink = ({ item, onNavigate }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors",
        isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      )}
      href={item.href}
      onClick={onNavigate}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-2xl text-xs font-bold",
          isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700",
        )}
      >
        {item.shortLabel}
      </span>
      <span className="flex-1">
        <span className="block text-sm font-semibold">{item.title}</span>
        <span className={cn("block text-xs", isActive ? "text-slate-300" : "text-slate-400")}>
          {item.description}
        </span>
      </span>
    </Link>
  );
};
