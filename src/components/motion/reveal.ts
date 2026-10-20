import type { CSSProperties } from "react";

/** Stagger index for [data-reveal] elements (see globals.css). */
export function revealDelay(index: number): CSSProperties {
  return { "--reveal-index": index } as CSSProperties;
}
