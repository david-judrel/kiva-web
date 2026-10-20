import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Card.module.css";

interface CardProps {
  as?: ElementType;
  variant?: "default" | "highlight" | "muted";
  padding?: "md" | "lg";
  className?: string;
  children: ReactNode;
  id?: string;
  /** Scroll-reveal entrance (on by default). */
  reveal?: boolean;
}

export function Card({ as: Tag = "div", variant = "default", padding = "md", className, children, id, reveal = true }: CardProps) {
  return (
    <Tag
      id={id}
      data-reveal={reveal ? "" : undefined}
      className={cn(
        styles.card,
        styles[variant],
        padding === "lg" && styles.lg,
        variant === "highlight" && "dark-surface",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
