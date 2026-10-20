import { NextResponse, type NextRequest } from "next/server";
import { articleSlugs } from "@/config/articles";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { lang } of ranked) {
    if (hasLocale(lang)) return lang;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = "", section, slug, ...extra] = pathname.split("/");
  if (hasLocale(first)) {
    // Unknown article slugs would otherwise render a streamed (HTTP 200) not-found page.
    if (section === "ressources" && slug && extra.length === 0 && !(articleSlugs as readonly string[]).includes(slug)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${first}/ressources/${slug}/introuvable`;
      return NextResponse.rewrite(url);
    }
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (icons, robots.txt, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
