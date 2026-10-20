import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { Direction } from "@/lib/format";
import { cn } from "@/lib/cn";
import styles from "./ChangeIndicator.module.css";

interface ChangeIndicatorProps {
  direction: Direction;
  /** Pre-formatted value with sign, e.g. "+1,2 %". */
  formatted: string;
  /** Screen-reader word for the direction ("en hausse"). */
  directionLabel: string;
  /** "plain" inherits the text color (e.g. on the lime ticker); sign and icon still carry the meaning. */
  tone?: "light" | "dark" | "plain";
  className?: string;
}

const icons = { up: ArrowUpRight, down: ArrowDownRight, flat: Minus };

/** Never relies on color alone: sign + icon + text for screen readers. */
export function ChangeIndicator({ direction, formatted, directionLabel, tone = "light", className }: ChangeIndicatorProps) {
  const Icon = icons[direction];
  return (
    <span className={cn(styles.change, styles[direction], tone !== "light" && styles[tone], className)}>
      <Icon size={14} strokeWidth={2} aria-hidden="true" />
      <span>{formatted}</span>
      <span className="visually-hidden">{directionLabel}</span>
    </span>
  );
}
