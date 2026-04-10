import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-3xl border border-white/70 bg-white/90 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur",
      className,
    )}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-base font-semibold text-slate-950", className)} {...props} />
);

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm leading-6 text-slate-500", className)} {...props} />
);
