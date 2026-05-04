import Link from "next/link";
import type { ReactNode } from "react";

type ShellButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ShellButton({ children, href, variant = "primary" }: ShellButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-3 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] active:scale-[0.98] sm:px-4";
  const styles =
    variant === "primary"
      ? "border border-[#111111] bg-[#111111] !text-white hover:bg-[#333333] [&_*]:!text-white"
      : "border border-[#D8D2C8] bg-white !text-[#111111] hover:border-[#111111] [&_*]:!text-[#111111]";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}

export function ShellIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D8D2C8] bg-white text-[#111111]">
      {children}
    </span>
  );
}

export function BrandMark() {
  return (
    <ShellIcon>
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M4.75 8.25 12 4l7.25 4.25v7.5L12 20l-7.25-4.25v-7.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M9 17.9V10l3-1.75L15 10v7.9M12 8.25V4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </ShellIcon>
  );
}

export function SettingsLink() {
  return (
    <Link
      href="/app/config"
      aria-label="Abrir configuracion"
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#D8D2C8] bg-white text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
    >
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M19 12a7.4 7.4 0 0 0-.08-1.08l2.03-1.58-2-3.46-2.39.96a7.34 7.34 0 0 0-1.86-1.08L14.35 3h-4.7l-.35 2.76a7.34 7.34 0 0 0-1.86 1.08l-2.39-.96-2 3.46 2.03 1.58a7.4 7.4 0 0 0 0 2.16l-2.03 1.58 2 3.46 2.39-.96a7.34 7.34 0 0 0 1.86 1.08l.35 2.76h4.7l.35-2.76a7.34 7.34 0 0 0 1.86-1.08l2.39.96 2-3.46-2.03-1.58c.05-.35.08-.71.08-1.08Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </Link>
  );
}
