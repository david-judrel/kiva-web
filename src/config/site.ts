/**
 * Brand and site-wide settings. KIVA is a temporary name: renaming the
 * product only requires changing `name` here (dictionaries interpolate it).
 */
export const site = {
  name: "KIVA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** No public contact address exists yet. Set it once the mailbox is live. */
  contactEmail: null as string | null,
  /** Only list accounts that actually exist. */
  social: [] as { label: string; href: string }[],
} as const;

export const BRAND = site.name;
