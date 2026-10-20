"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { localeNames, locales, switchLocalePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
}

export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => () => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn(styles.root, className)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${label} (${localeNames[locale]})`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={18} strokeWidth={1.75} aria-hidden="true" />
        <span aria-hidden="true">{locale.toUpperCase()}</span>
        <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
      </button>
      <ul id="language-menu" className={styles.menu} hidden={!open}>
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={switchLocalePath(pathname, l)}
              hrefLang={l}
              lang={l}
              className={styles.option}
              aria-current={l === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {localeNames[l]}
              {l === locale && <Check size={16} strokeWidth={2} aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Inline variant for the mobile drawer. */
export function LanguageLinks({ locale, label, onNavigate }: { locale: Locale; label: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className={styles.inline}>
      <p className={styles.inlineLabel}>
        <Globe size={16} strokeWidth={1.75} aria-hidden="true" />
        {label}
      </p>
      <ul className={styles.inlineList}>
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={switchLocalePath(pathname, l)}
              hrefLang={l}
              lang={l}
              className={styles.inlineOption}
              aria-current={l === locale ? "true" : undefined}
              onClick={onNavigate}
            >
              {localeNames[l]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
