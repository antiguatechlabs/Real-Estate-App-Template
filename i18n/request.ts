import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { formats } from "./formats";
import { defaultLocale, locales, type AppLocale } from "./locale";

async function loadMessages(locale: AppLocale) {
  if (locale === "es") {
    const [common, marketingStarterLanding] = await Promise.all([
      import("@/messages/es/common.json").then((module) => module.default),
      import("@/messages/es/marketing-starter-landing.json").then(
        (module) => module.default,
      ),
    ]);

    return {
      common,
      marketingStarterLanding,
    };
  }

  const [common, marketingStarterLanding] = await Promise.all([
    import("@/messages/en/common.json").then((module) => module.default),
    import("@/messages/en/marketing-starter-landing.json").then(
      (module) => module.default,
    ),
  ]);

  return {
    common,
    marketingStarterLanding,
  };
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(locales, requestedLocale)
    ? requestedLocale
    : defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
    formats,
  };
});
