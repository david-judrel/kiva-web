"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { mainNavigation, type NavGroupId } from "@/config/navigation";
import { localizePath, type Locale } from "@/i18n/config";
import { ButtonLink } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import { Logo } from "@/components/ui/Logo";
import type { NavLabels } from "./DesktopNavigation";
import { LanguageLinks } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./MobileNavigation.module.css";

interface MobileLabels extends NavLabels {
  open: string;
  close: string;
  home: string;
  login: string;
  signup: string;
  language: string;
  theme: { label: string; toDark: string; toLight: string };
}

export function MobileNavigation({ locale, labels }: { locale: Locale; labels: MobileLabels }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<NavGroupId | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useLayoutEffect(() => () => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.querySelector<HTMLElement>("button, a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-label={labels.open}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} strokeWidth={1.75} aria-hidden="true" />
      </button>

      {/* Portal: keeps the drawer out of the header's light/dark theme. */}
      {open &&
        createPortal(
        <div
          ref={dialogRef}
          id="mobile-navigation"
          className={styles.dialog}
          role="dialog"
          aria-modal="true"
          aria-label={labels.label}
        >
          <div className={styles.top}>
            <div className={`container ${styles.topInner}`}>
              <Logo href={localizePath(locale, "/")} label={labels.home} />
              <button type="button" className={styles.trigger} aria-label={labels.close} onClick={close}>
                <X size={24} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={`container ${styles.body}`}>
            <nav aria-label={labels.label}>
              <ul className={styles.groups}>
                {mainNavigation.map((group) => {
                  const isExpanded = expanded === group.id;
                  return (
                    <li key={group.id} className={styles.group}>
                      <button
                        type="button"
                        className={styles.groupTrigger}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-group-${group.id}`}
                        onClick={() => setExpanded(isExpanded ? null : group.id)}
                      >
                        {labels.groups[group.id]}
                        <ChevronDown size={20} strokeWidth={1.75} aria-hidden="true" className={styles.chevron} />
                      </button>
                      <ul id={`mobile-group-${group.id}`} className={styles.items} hidden={!isExpanded}>
                        {group.items.map((item) => (
                          <li key={item.id}>
                            <Link href={localizePath(locale, item.href)} className={styles.item} onClick={close}>
                              <IconTile icon={item.icon} size="sm" />
                              <span className={styles.itemText}>
                                <span className={styles.itemLabel}>{labels.items[item.id].label}</span>
                                <span className={styles.itemDescription}>{labels.items[item.id].description}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.footer}>
              <LanguageLinks locale={locale} label={labels.language} onNavigate={close} />
              <ThemeToggle labels={labels.theme} variant="full" />
              <div className={styles.ctas}>
                <ButtonLink href={localizePath(locale, "/connexion")} variant="secondary" block onClick={close}>
                  {labels.login}
                </ButtonLink>
                <ButtonLink href={localizePath(locale, "/inscription")} variant="accent" block onClick={close}>
                  {labels.signup}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
