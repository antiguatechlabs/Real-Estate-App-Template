export const locales = ["es", "en"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "es";

export function isSupportedLocale(locale: string): locale is AppLocale {
  return locales.includes(locale as AppLocale);
}
