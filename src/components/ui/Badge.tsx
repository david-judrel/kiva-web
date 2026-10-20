import { FlaskConical } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Badge.module.css";

type BadgeVariant = "neutral" | "demo" | "positive" | "negative" | "warning" | "onDark";

interface BadgeProps {
  variant?: BadgeVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Badge({ variant = "neutral", icon, children, className, title }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], className)} title={title}>
      {icon}
      {children}
    </span>
  );
}

/** Mandatory label on every piece of simulated financial data. */
export function DemoBadge({
  label,
  title,
  className,
  tone = "light",
}: {
  label: string;
  title?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Badge
      variant={tone === "dark" ? "onDark" : "demo"}
      icon={<FlaskConical size={12} strokeWidth={2} aria-hidden="true" />}
      title={title}
      className={className}
    >
      {label}
    </Badge>
  );
}
