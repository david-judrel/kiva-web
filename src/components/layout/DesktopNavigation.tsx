"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { mainNavigation, type NavGroupId, type NavItemId } from "@/config/navigation";
import { localizePath, type Locale } from "@/i18n/config";
import { IconTile } from "@/components/ui/IconTile";
import { cn } from "@/lib/cn";
import styles from "./DesktopNavigation.module.css";

export interface NavLabels {
  label: string;
  groups: Record<NavGroupId, string>;
  items: Record<NavItemId, { label: string; description: string }>;
}

export function DesktopNavigation({ locale, labels }: { locale: Locale; labels: NavLabels }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<NavGroupId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpened = useRef(false);

  // Close transient menus when the page is hidden by client navigation (Activity).
  useLayoutEffect(() => () => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: globalThis.PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
    }
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        const trigger = navRef.current?.querySelector<HTMLButtonElement>(`[data-group="${open}"]`);
        setOpen(null);
        trigger?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function focusFirstLink(id: NavGroupId) {
    requestAnimationFrame(() => {
      navRef.current?.querySelector<HTMLAnchorElement>(`#nav-panel-${id} a`)?.focus();
    });
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>, id: NavGroupId) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(id);
      focusFirstLink(id);
    }
  }

  function onPanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next = event.key === "ArrowDown" ? (index + 1) % links.length : (index - 1 + links.length) % links.length;
    links[next]?.focus();
  }

  function onPointerEnter(event: PointerEvent, id: NavGroupId) {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    hoverOpened.current = open !== id;
    setOpen(id);
  }

  function onPointerLeave(event: PointerEvent) {
    if (event.pointerType !== "mouse") return;
    hoverOpened.current = false;
    closeTimer.current = window.setTimeout(() => setOpen(null), 150);
  }

  function onTriggerClick(id: NavGroupId) {
    // A click right after hover-open must keep the menu open, not toggle it shut.
    // Reads the ref only: `open` may still be stale if both events land in the same frame.
    if (hoverOpened.current) {
      hoverOpened.current = false;
      setOpen(id);
      return;
    }
    setOpen((current) => (current === id ? null : id));
  }

  return (
    <nav
      ref={navRef}
      aria-label={labels.label}
      className={styles.nav}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(null);
      }}
    >
      <ul className={styles.list}>
        {mainNavigation.map((group) => {
          const isOpen = open === group.id;
          const isActive = group.items.some((item) => pathname === localizePath(locale, item.href.split("#")[0]));
          return (
            <li
              key={group.id}
              className={styles.group}
              onPointerEnter={(e) => onPointerEnter(e, group.id)}
              onPointerLeave={onPointerLeave}
            >
              <button
                type="button"
                data-group={group.id}
                className={cn(styles.trigger, isActive && styles.active)}
                aria-expanded={isOpen}
                aria-controls={`nav-panel-${group.id}`}
                onClick={() => onTriggerClick(group.id)}
                onKeyDown={(e) => onTriggerKeyDown(e, group.id)}
              >
                {labels.groups[group.id]}
                <ChevronDown size={16} strokeWidth={2} aria-hidden="true" className={styles.chevron} />
              </button>
              <div id={`nav-panel-${group.id}`} className={styles.panel} hidden={!isOpen} onKeyDown={onPanelKeyDown}>
                <ul className={styles.items}>
                  {group.items.map((item) => {
                    const href = localizePath(locale, item.href);
                    const current = pathname === href;
                    return (
                      <li key={item.id}>
                        <Link
                          href={href}
                          className={styles.item}
                          aria-current={current ? "page" : undefined}
                          onClick={() => setOpen(null)}
                        >
                          <IconTile icon={item.icon} size="sm" />
                          <span className={styles.itemText}>
                            <span className={styles.itemLabel}>{labels.items[item.id].label}</span>
                            <span className={styles.itemDescription}>{labels.items[item.id].description}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
