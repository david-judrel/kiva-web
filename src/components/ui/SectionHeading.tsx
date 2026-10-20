import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  as?: "h1" | "h2";
  align?: "start" | "center";
  tone?: "light" | "dark";
  actions?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  as: Heading = "h2",
  align = "start",
  tone = "light",
  actions,
  className,
}: SectionHeadingProps) {
  return (
    <div data-reveal className={cn(styles.heading, align === "center" && styles.center, tone === "dark" && styles.dark, className)}>
      <div className={styles.copy}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <Heading id={id} className={Heading === "h1" ? styles.pageTitle : styles.title}>
          {title}
        </Heading>
        {text && <p className={styles.text}>{text}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
