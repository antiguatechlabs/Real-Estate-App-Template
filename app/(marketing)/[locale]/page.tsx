import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { LandingPage } from "@/features/marketing/starter-landing/LandingPage";
import { brandConfig } from "@/features/marketing/starter-landing/config/brand";
import { routing } from "@/i18n/routing";

type MarketingHomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: MarketingHomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "marketingStarterLanding.metadata",
  });

  const title = t("title", {
    agencyName: brandConfig.agencyName,
    city: brandConfig.city,
  });
  const description = t("description", {
    agencyName: brandConfig.agencyName,
    city: brandConfig.city,
  });

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((supportedLocale) => [supportedLocale, `/${supportedLocale}`]),
      ),
    },
    openGraph: {
      title,
      description,
      locale,
    },
  };
}

export default async function MarketingHomePage({
  params,
}: MarketingHomePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <LandingPage locale={locale} />;
}
