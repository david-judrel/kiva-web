import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./get-dictionary";

/** Resolves the locale route param for a page, or renders the 404 page. */
export async function resolveLocale(params: Promise<{ locale: string }>): Promise<{ locale: Locale; dict: Dictionary }> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return { locale, dict: getDictionary(locale) };
}
