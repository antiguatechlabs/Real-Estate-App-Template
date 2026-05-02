"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
  children?: ReactNode;
  content: ReactNode;
  label?: string;
};

type TooltipPosition = {
  left: number;
  placement: "bottom" | "top";
  top: number;
};

const VIEWPORT_GAP = 16;
const TOOLTIP_WIDTH = 256;

export function Tooltip({ children, content, label = "Más información" }: TooltipProps) {
  const id = useId();
  const triggerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<TooltipPosition>({
    left: 0,
    placement: "top",
    top: 0,
  });

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;

    if (!trigger) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const placement = rect.top < 96 ? "bottom" : "top";
    const safeHalfWidth = Math.min(TOOLTIP_WIDTH / 2, window.innerWidth / 2 - VIEWPORT_GAP);
    const left = Math.min(
      Math.max(rect.left + rect.width / 2, VIEWPORT_GAP + safeHalfWidth),
      window.innerWidth - VIEWPORT_GAP - safeHalfWidth,
    );
    const top = placement === "top" ? rect.top - 10 : rect.bottom + 10;

    setPosition({ left, placement, top });
  }, []);

  const openTooltip = () => {
    updatePosition();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  const tooltipStyle: CSSProperties = {
    left: position.left,
    top: position.top,
    transform:
      position.placement === "top" ? "translate(-50%, -100%)" : "translate(-50%, 0)",
  };

  return (
    <>
      <span className="inline-flex shrink-0 items-center">
        {children ? (
          <span
            ref={(node) => {
              triggerRef.current = node;
            }}
            aria-describedby={id}
            className="inline-flex"
            onBlur={() => setIsOpen(false)}
            onFocus={openTooltip}
            onMouseEnter={openTooltip}
            onMouseLeave={() => setIsOpen(false)}
            tabIndex={0}
          >
            {children}
          </span>
        ) : (
          <button
            ref={(node) => {
              triggerRef.current = node;
            }}
            type="button"
            aria-label={label}
            aria-describedby={id}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#D8D2C8] bg-[#FBFAF7] text-[11px] font-semibold text-[#5E625C] transition-colors duration-200 hover:border-[#CFC7BA] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
            onBlur={() => setIsOpen(false)}
            onFocus={openTooltip}
            onMouseEnter={openTooltip}
            onMouseLeave={() => setIsOpen(false)}
          >
            i
          </button>
        )}
      </span>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <span
            id={id}
            role="tooltip"
            style={tooltipStyle}
            className="pointer-events-none fixed z-[9999] max-w-[calc(100vw-2rem)] rounded-lg border border-[#E5E1D8] bg-[#111111] px-3 py-2 text-left text-xs font-normal leading-5 text-white shadow-[0_16px_44px_rgba(17,17,17,0.18)]"
          >
            <span className="block w-64 max-w-full whitespace-normal break-words">
              {content}
            </span>
          </span>,
          document.body,
        )}
    </>
  );
}
