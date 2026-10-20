import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import styles from "./Logo.module.css";

/**
 * Text wordmark. No official logo exists yet (see KIVA_BRAND_GUIDELINES.md §5);
 * replace this component once brand assets are delivered.
 */
export function Logo({ href, label, tone = "light" }: { href: string; label: string; tone?: "light" | "dark" }) {
  return (
    <Link href={href} className={cn(styles.logo, tone === "dark" && styles.dark)} aria-label={label}>
      {site.name}
    </Link>
  );
}
