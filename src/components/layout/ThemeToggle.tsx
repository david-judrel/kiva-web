"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { THEME_COLORS, THEME_STORAGE_KEY } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  labels: { toDark: string; toLight: string };
  className?: string;
  variant?: "icon" | "full";
}

/**
 * Icon and label are driven by CSS on html[data-theme], so the server render
 * never mismatches the theme chosen before hydration.
 */
export function ThemeToggle({ labels, className, variant = "icon" }: ThemeToggleProps) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (animate) root.classList.add("theme-transition");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this page only.
    }
    document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", THEME_COLORS[next]);
    });
    if (animate) window.setTimeout(() => root.classList.remove("theme-transition"), 300);
  }

  return (
    <button type="button" className={cn(styles.toggle, variant === "full" && styles.full, className)} onClick={toggle}>
      <Moon className={styles.moon} size={18} strokeWidth={1.75} aria-hidden="true" />
      <Sun className={styles.sun} size={18} strokeWidth={1.75} aria-hidden="true" />
      <span className={cn(styles.label, styles.labelDark, variant === "icon" && "visually-hidden")}>{labels.toDark}</span>
      <span className={cn(styles.label, styles.labelLight, variant === "icon" && "visually-hidden")}>{labels.toLight}</span>
    </button>
  );
}
