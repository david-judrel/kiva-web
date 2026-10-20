import { intlLocale, type Locale } from "@/i18n/config";

/** Formats a FCFA amount. Called on the server so client hydration gets identical strings. */
export function formatPrice(locale: Locale, value: number): string {
  const digits = value < 100 ? 2 : 0;
  const number = new Intl.NumberFormat(intlLocale[locale], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
  return `${number} FCFA`;
}

/** Formats a percentage change with an explicit sign (+, −, or none for zero). */
export function formatChange(locale: Locale, value: number): string {
  const abs = new Intl.NumberFormat(intlLocale[locale], {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.abs(value));
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  // French typography puts a non-breaking space before "%", English does not.
  return `${sign}${abs}${locale === "fr" ? " " : ""}%`;
}

export type Direction = "up" | "down" | "flat";

export function direction(value: number): Direction {
  return value > 0 ? "up" : value < 0 ? "down" : "flat";
}
