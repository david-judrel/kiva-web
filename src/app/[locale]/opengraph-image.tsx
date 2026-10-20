import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const alt = `${site.name} — ${getDictionary(defaultLocale).home.hero.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors mirror design-tokens/kiva.tokens.json (ImageResponse cannot read CSS variables).
const FOREST = "#101C17";
const LIME = "#B7FF72";
const OFF_WHITE = "#F7F8F4";
const ON_DARK_MUTED = "#B6BAB6";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(hasLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: FOREST,
          color: OFF_WHITE,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>
          {site.name}
          <div style={{ width: 14, height: 14, borderRadius: 7, background: LIME }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>{dict.home.hero.title}</div>
          <div style={{ fontSize: 28, color: ON_DARK_MUTED }}>{dict.home.hero.eyebrow}</div>
        </div>
      </div>
    ),
    size,
  );
}
