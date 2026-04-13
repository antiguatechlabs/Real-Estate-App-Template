import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { PropsWithChildren } from "react";

import { defaultLocale, locales } from "@/i18n/locale";

import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Real Estate App Template",
    template: "%s | Real Estate App Template",
  },
  description: "Base project with Next.js 16, TypeScript, Tailwind and React Query.",
};

type RootLayoutProps = PropsWithChildren<{
  params?: Promise<{
    locale?: string;
  }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = params ? (await params).locale : undefined;
  const htmlLang = locale && hasLocale(locales, locale) ? locale : defaultLocale;

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
