import { BookOpen, Check, ShieldCheck, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import styles from "./FeatureArt.module.css";

export type FeatureArtVariant = "stack" | "orb" | "natures" | "shield";

interface FeatureArtProps {
  variant: FeatureArtVariant;
  /** Short labels rendered inside the illustration (localized). */
  labels?: string[];
}

/**
 * Decorative 3D-style illustrations for the "Discover" carousel, built with
 * CSS/SVG only (no images). Hidden from assistive tech: each card's title and
 * text carry the meaning.
 */
export function FeatureArt({ variant, labels = [] }: FeatureArtProps) {
  return (
    <div className={cn(styles.art, styles[variant])} aria-hidden="true">
      {variant === "stack" && <Stack />}
      {variant === "orb" && <Orb labels={labels} />}
      {variant === "natures" && <Natures labels={labels} />}
      {variant === "shield" && <Shield />}
    </div>
  );
}

/** Layered isometric slabs (mobile + web, one experience). Exact geometry in SVG. */
function Slab({ y, tone, label }: { y: number; tone: "base" | "lime" | "top"; label?: string }) {
  const t = 22; // thickness
  const top = `150,${y} 250,${y + 56} 150,${y + 112} 50,${y + 56}`;
  const left = `50,${y + 56} 150,${y + 112} 150,${y + 112 + t} 50,${y + 56 + t}`;
  const right = `150,${y + 112} 250,${y + 56} 250,${y + 56 + t} 150,${y + 112 + t}`;
  return (
    <g className={cn(styles.slab, styles[`slab_${tone}`])}>
      <polygon className={styles.faceLeft} points={left} />
      <polygon className={styles.faceRight} points={right} />
      <polygon className={styles.faceTop} points={top} />
      {label && (
        <g transform={`translate(150 ${y + 56}) matrix(0.873 0.488 -0.873 0.488 0 0)`}>
          <rect x="-46" y="-17" width="92" height="34" rx="9" className={styles.labelBg} />
          <text x="0" y="1" className={styles.labelText}>
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function Stack() {
  return (
    <svg className={styles.stackSvg} viewBox="0 0 300 340">
      <ellipse cx="150" cy="300" rx="120" ry="26" className={styles.stackShadow} />
      <Slab y={176} tone="base" />
      <Slab y={118} tone="lime" />
      <Slab y={60} tone="top" label={site.name} />
    </svg>
  );
}

/** Glowing orb on a striped backdrop with two chat-like pills. */
function Orb({ labels }: { labels: string[] }) {
  return (
    <>
      <div className={styles.stripes} />
      <div className={styles.orbRing}>
        <div className={styles.orbCore}>
          <BookOpen size={46} strokeWidth={2.25} />
        </div>
      </div>
      <span className={cn(styles.pill, styles.pillTop)}>{labels[0]}</span>
      <span className={cn(styles.pill, styles.pillBottom)}>{labels[1]}</span>
      <span className={cn(styles.dot, styles.dotA)} />
      <span className={cn(styles.dot, styles.dotB)} />
    </>
  );
}

/** The four data natures as glossy 3D pills. */
function Natures({ labels }: { labels: string[] }) {
  return (
    <div className={styles.naturesScene}>
      {labels.map((label, i) => (
        <span key={label} className={styles.naturePill} style={{ "--i": i } as CSSProperties} data-tone={i}>
          <span className={styles.natureDot}>{i === 0 && <Check size={12} strokeWidth={3} />}</span>
          {label}
        </span>
      ))}
    </div>
  );
}

/** Shield coin crossed by energy lines. */
function Shield() {
  return (
    <>
      <svg className={styles.bolts} viewBox="0 0 300 300" fill="none">
        <path d="M10 250 L80 190 L70 170 L150 120 L140 100 L230 40" />
        <path d="M40 290 L110 220 L100 205 L170 160 L165 140 L290 70" />
        <path d="M0 200 L60 160 L55 145 L120 110" />
      </svg>
      <div className={styles.tube} />
      <div className={styles.shieldCoin}>
        <div className={styles.shieldFace}>
          <ShieldCheck size={58} strokeWidth={2} />
        </div>
      </div>
      <Zap className={styles.spark} size={26} strokeWidth={2} />
    </>
  );
}
