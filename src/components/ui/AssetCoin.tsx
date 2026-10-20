import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { IssuerLogo } from "@/lib/logos";
import styles from "./AssetCoin.module.css";

interface AssetCoinProps {
  /** Company name: its first letter is engraved on the coin. */
  name: string;
  /** Optional issuer logo (local demo only); replaces the engraved initial. */
  logo?: IssuerLogo;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Gentle idle spin (decorative; disabled with reduced motion). */
  spin?: boolean;
  className?: string;
}

/**
 * Glossy 3D coin used as a company emblem. By default it shows the engraved
 * initial; issuer logos (trademarks) appear only in local demos, see lib/logos.ts.
 */
export function AssetCoin({ name, logo, size = "md", spin = false, className }: AssetCoinProps) {
  return (
    <span className={cn(styles.coin, styles[size], spin && styles.spin, className)} aria-hidden="true">
      <span className={cn(styles.face, logo && styles.logoFace)}>
        {logo ? (
          <span
            className={cn(styles.logoDisc, logo.fit === "contain" && styles.logoContain)}
            style={{ "--logo-bg": logo.bg, "--logo-scale": logo.scale } as CSSProperties}
          >
            {/* Small local file in public/logos: next/image optimization brings nothing here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt="" width={128} height={128} loading="lazy" decoding="async" className={styles.logo} />
          </span>
        ) : (
          <span className={styles.initial}>{name.trim().slice(0, 1).toUpperCase()}</span>
        )}
      </span>
    </span>
  );
}
