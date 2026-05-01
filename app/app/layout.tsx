import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#04070f] text-slate-50"
      style={{
        fontFamily:
          '"Geist", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.12),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.18),_transparent_28%),linear-gradient(180deg,_#02050c_0%,_#07111f_52%,_#02040a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]"
      />
      {children}
    </div>
  );
}
