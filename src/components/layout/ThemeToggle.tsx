"use client";

import { Moon, Sun } from "lucide-react";
import type { MouseEvent } from "react";
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
  function applyTheme(next: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this page only.
    }
    document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", THEME_COLORS[next]);
    });
  }

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Circular propagation from the button (View Transitions API), when supported.
    if (!reduced && typeof document.startViewTransition === "function") {
      const rect = event.currentTarget.getBoundingClientRect();
      // Keyboard activation has no pointer position: start from the button center.
      const x = event.clientX || rect.left + rect.width / 2;
      const y = event.clientY || rect.top + rect.height / 2;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const transition = document.startViewTransition(() => applyTheme(next));
      transition.ready
        .then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 700, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
          );
        })
        .catch(() => {
          // Transition skipped (e.g. tab hidden): the theme is already applied.
        });
      return;
    }

    if (!reduced) root.classList.add("theme-transition");
    applyTheme(next);
    if (!reduced) window.setTimeout(() => root.classList.remove("theme-transition"), 300);
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
