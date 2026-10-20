import { closeSync, existsSync, openSync, readFileSync, readdirSync, readSync } from "node:fs";
import path from "node:path";

/**
 * Issuer logos (third-party trademarks, used for demonstration) are shown when a
 * usable file exists in public/logos/<id>.(svg|png|jpg); otherwise the coin shows
 * the company's initial. Enabled by default; set NEXT_PUBLIC_SHOW_ISSUER_LOGOS=false
 * to hide them all without removing the files.
 */
const enabled = process.env.NEXT_PUBLIC_SHOW_ISSUER_LOGOS !== "false";

/** How a logo is placed on the coin disc (see public/logos/logos.json). */
export interface IssuerLogo {
  src: string;
  /** "cover": fills the disc, corners cropped. "contain": fully visible on a disc painted with `bg`. */
  fit: "cover" | "contain";
  /** Disc color for "contain" (the logo's own background color). */
  bg?: string;
  /** Zoom factor, 1 by default. */
  scale: number;
}

/** Raster logos smaller than this look blurry on the coins: they are ignored. */
const MIN_SIZE = 96;

/**
 * Resolved once when the module loads (not during render): file-system reads
 * inside a prerender are flagged by Cache Components.
 */
const LOGOS = enabled ? scanLogos() : new Map<string, IssuerLogo>();

export function issuerLogo(id: string): IssuerLogo | undefined {
  return LOGOS.get(id);
}

function scanLogos(): Map<string, IssuerLogo> {
  const dir = path.join(process.cwd(), "public", "logos");
  const found = new Map<string, IssuerLogo>();
  if (!existsSync(dir)) return found;
  const settings = readSettings(path.join(dir, "logos.json"));
  // svg first: preferred over raster files with the same id.
  const files = readdirSync(dir).sort((a, b) => Number(!a.endsWith(".svg")) - Number(!b.endsWith(".svg")));
  for (const name of files) {
    const match = /^([a-z0-9-]+)\.(svg|png|jpg)$/.exec(name);
    if (!match || found.has(match[1])) continue;
    const [, id, ext] = match;
    if (ext !== "svg") {
      const size = rasterSize(path.join(dir, name));
      if (!size || Math.min(size.width, size.height) < MIN_SIZE) continue;
    }
    const opts = settings[id] ?? {};
    found.set(id, {
      src: `/logos/${name}`,
      fit: opts.fit === "contain" ? "contain" : "cover",
      bg: typeof opts.bg === "string" && /^#[0-9a-f]{3,8}$/i.test(opts.bg) ? opts.bg : undefined,
      scale: typeof opts.scale === "number" && opts.scale > 0.3 && opts.scale < 2 ? opts.scale : 1,
    });
  }
  return found;
}

type LogoSettings = Record<string, { fit?: unknown; bg?: unknown; scale?: unknown }>;

function readSettings(file: string): LogoSettings {
  if (!existsSync(file)) return {};
  try {
    const parsed = JSON.parse(readFileSync(file, "utf8"));
    return parsed && typeof parsed === "object" ? (parsed as LogoSettings) : {};
  } catch {
    return {};
  }
}

/** Reads PNG or JPEG dimensions from the file header (no dependency). */
function rasterSize(file: string): { width: number; height: number } | undefined {
  const fd = openSync(file, "r");
  try {
    const buf = Buffer.alloc(64 * 1024);
    const length = readSync(fd, buf, 0, buf.length, 0);
    // PNG: signature + IHDR width/height at bytes 16–23.
    if (buf.readUInt32BE(0) === 0x89504e47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    // JPEG: walk segments until a Start Of Frame marker.
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset + 9 < length) {
        if (buf[offset] !== 0xff) return undefined;
        const marker = buf[offset + 1];
        const segment = buf.readUInt16BE(offset + 2);
        if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
          return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
        }
        offset += 2 + segment;
      }
    }
    return undefined;
  } finally {
    closeSync(fd);
  }
}
