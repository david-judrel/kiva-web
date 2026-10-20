import type { MetadataRoute } from "next";
import { articleSlugs } from "@/config/navigation";
import { site } from "@/config/site";
import { localizePath, locales } from "@/i18n/config";

// Legal drafts are excluded until reviewed (they are also marked noindex).
const paths = [
  "/",
  "/marches",
  "/entreprises",
  "/fonctionnement",
  "/solutions",
  "/ressources",
  ...articleSlugs.map((slug) => `/ressources/${slug}`),
  "/faq",
  "/a-propos",
  "/contact",
  "/acces-anticipe",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${localizePath("fr", path)}`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${localizePath(l, path)}`])),
    },
  }));
}
