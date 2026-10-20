"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Sticky header (follows the site theme); marks [data-scrolled] once the page moves, for a subtle elevation. */
export function HeaderShell({ className, children }: { className: string; children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 4);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={className} data-scrolled={scrolled ? "" : undefined}>
      {children}
    </header>
  );
}
