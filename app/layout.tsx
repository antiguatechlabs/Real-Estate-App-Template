import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate App Template",
  description: "Base project with Next.js 16, TypeScript, Tailwind and React Query.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
