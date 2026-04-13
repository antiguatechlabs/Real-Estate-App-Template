import type { AppLocale } from "@/i18n/locale";

import { brandConfig } from "./config/brand";
import { featuredAgents } from "./data/agents";
import { featuredProperties } from "./data/properties";
import { testimonialEntries } from "./data/testimonials";
import { CTABanner } from "./sections/cta-banner";
import { FeaturedAgents } from "./sections/featured-agents";
import { FeaturedProperties } from "./sections/featured-properties";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { HowItWorks } from "./sections/how-it-works";
import { Navbar } from "./sections/navbar";
import { PropertyCategories } from "./sections/property-categories";
import { Stats } from "./sections/stats";
import { Testimonials } from "./sections/testimonials";

type LandingPageProps = {
  locale: AppLocale;
};

export function LandingPage({ locale }: LandingPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-50">
      <Navbar brand={brandConfig} locale={locale} />
      <Hero brand={brandConfig} />
      <Stats />
      <FeaturedProperties properties={featuredProperties} />
      <HowItWorks />
      <PropertyCategories />
      <Testimonials testimonials={testimonialEntries} />
      <FeaturedAgents agents={featuredAgents} />
      <CTABanner brand={brandConfig} />
      <Footer brand={brandConfig} locale={locale} />
    </main>
  );
}
