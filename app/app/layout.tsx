import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#F7F6F2] text-[#111111]"
      style={{
        fontFamily:
          '"Satoshi", "Geist", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(212,163,115,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(44,125,160,0.08),_transparent_28%),linear-gradient(180deg,_#F7F6F2_0%,_#FBFAF7_56%,_#EFE8DD_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
      />
      {children}
    </div>
  );
}
