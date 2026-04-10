import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/utils/cn";

const buttonVariants = {
  primary:
    "bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800",
  secondary:
    "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

type Variant = keyof typeof buttonVariants;

const sharedStyles =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({ className, variant = "primary", ...props }: ButtonProps) => (
  <button className={cn(sharedStyles, buttonVariants[variant], className)} {...props} />
);

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export const LinkButton = ({
  className,
  href,
  variant = "primary",
  ...props
}: LinkButtonProps) => (
  <Link className={cn(sharedStyles, buttonVariants[variant], className)} href={href} {...props} />
);
