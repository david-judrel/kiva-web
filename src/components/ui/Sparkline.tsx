import type { Direction } from "@/lib/format";
import { cn } from "@/lib/cn";
import styles from "./Sparkline.module.css";

interface SparklineProps {
  values: number[];
  direction: Direction;
  width?: number;
  height?: number;
  area?: boolean;
  /** Accessible description. Omit for purely decorative sparklines next to a textual value. */
  label?: string;
  className?: string;
  tone?: "light" | "dark";
  /** Animate the curve drawing from left to right as it scrolls into view. */
  draw?: boolean;
}

export function Sparkline({
  values,
  direction,
  width = 96,
  height = 32,
  area = false,
  label,
  className,
  tone = "light",
  draw = false,
}: SparklineProps) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pad = 2;
  const step = (width - pad * 2) / Math.max(values.length - 1, 1);
  const points = values.map((v, i) => {
    const x = pad + i * step;
    const y = pad + (height - pad * 2) * (1 - (v - min) / range);
    return [Number(x.toFixed(2)), Number(y.toFixed(2))] as const;
  });
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  const fill = `${line} L${points[points.length - 1][0]} ${height} L${points[0][0]} ${height} Z`;

  return (
    <svg
      className={cn(styles.sparkline, styles[direction], tone === "dark" && styles.dark, draw && "draw-in", className)}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {area && <path className={styles.area} d={fill} />}
      <path className={styles.line} d={line} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
