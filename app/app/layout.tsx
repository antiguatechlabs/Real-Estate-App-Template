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
          '"Geist Sans", "SF Pro Display", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif',
        ["--crm-serif" as string]:
          '"Instrument Serif", "Newsreader", "Playfair Display", Georgia, serif',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-[#F7F6F2]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(17,17,17,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.025)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
      />
      {children}
    </div>
  );
}
