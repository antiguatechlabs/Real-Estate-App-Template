import { useId, type ReactNode } from "react";

type TooltipProps = {
  children?: ReactNode;
  content: ReactNode;
  label?: string;
};

export function Tooltip({ children, content, label = "Más información" }: TooltipProps) {
  const id = useId();

  return (
    <span className="group/tooltip relative inline-flex items-center">
      {children ?? (
        <button
          type="button"
          aria-label={label}
          aria-describedby={id}
          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#E5E1D8] bg-[#FBFAF7] text-[11px] font-semibold text-[#5E625C] transition-colors duration-200 hover:border-[#CFC7BA] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
        >
          i
        </button>
      )}
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg border border-[#E5E1D8] bg-[#111111] px-3 py-2 text-left text-xs font-normal leading-5 text-white opacity-0 shadow-[0_10px_30px_rgba(17,17,17,0.12)] transition-opacity duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
      >
        {content}
      </span>
    </span>
  );
}
