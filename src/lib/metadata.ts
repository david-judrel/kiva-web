import type { Metadata } from "next";
import { site } from "@/config/site";
import { localizePath, locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/** Page metadata with canonical URL, hreflang alternates and Open Graph tags. */
export function pageMetadata(
  locale: Locale,
  { title, description, path }: { title?: string; description?: string; path: string },
): Metadata {
  const dict = getDictionary(locale);
  const desc = description ?? dict.meta.description;
  const languages = Object.fromEntries(locales.map((l) => [l, localizePath(l, path)]));
  // A page-level `openGraph` object replaces the inherited one, so the image is set explicitly.
  const image = { url: localizePath(locale, "/opengraph-image"), width: 1200, height: 630, alt: dict.meta.title };
  return {
    title: title ?? { absolute: dict.meta.title },
    description: desc,
    alternates: {
      canonical: localizePath(locale, path),
      languages: { ...languages, "x-default": localizePath("fr", path) },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: title ? `${title} · ${site.name}` : dict.meta.title,
      description: desc,
      locale: ogLocale[locale],
      url: localizePath(locale, path),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} · ${site.name}` : dict.meta.title,
      description: desc,
      images: [image.url],
    },
  };
}
