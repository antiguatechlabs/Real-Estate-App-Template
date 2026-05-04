import type { ChangeEvent, ReactNode } from "react";

type StatusTone = "danger" | "neutral" | "success" | "warning";

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: StatusTone;
}) {
  const styles: Record<StatusTone, string> = {
    danger: "border-[#F0C9C8] bg-[#FDEBEC] text-[#9F2F2D]",
    neutral: "border-[#D8D2C8] bg-[#F7F6F2] text-[#343831]",
    success: "border-[#CFE1CA] bg-[#EDF3EC] text-[#346538]",
    warning: "border-[#EBCB96] bg-[#FBF3DB] text-[#956400]",
  };

  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-md border px-2.5 text-xs font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function FieldLabel({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-semibold leading-none text-[#343831]">
      {children}
    </label>
  );
}

export function TextInput({
  id,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  id?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      className="min-h-11 w-full rounded-md border border-[#D8D2C8] bg-white px-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#8A8D85] focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/15"
    />
  );
}

export function SecondaryButton({
  children,
  disabled,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#D8D2C8] bg-white px-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] disabled:cursor-not-allowed disabled:opacity-45"
    >
      {children}
    </button>
  );
}

export function PrimaryButton({
  children,
  disabled,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#111111] bg-[#111111] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] disabled:cursor-not-allowed disabled:opacity-45"
    >
      {children}
    </button>
  );
}
