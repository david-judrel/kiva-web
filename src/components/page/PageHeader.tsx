import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Page.module.css";

/** Header band shared by all secondary pages (follows the theme, continuity with the home hero). */
export function PageHeader({ title, intro, badge, children }: { title: string; intro?: string; badge?: ReactNode; children?: ReactNode }) {
  return (
    <header className={styles.pageHeader}>
      <div className={cn(styles.pageHeaderGrid, "grid-pattern")} aria-hidden="true" />
      <div className="container">
        <div className={styles.pageHeaderInner}>
          {badge && <div className={styles.enter}>{badge}</div>}
          <h1 className={cn(styles.pageTitle, styles.enter)} style={{ animationDelay: "80ms" }}>
            {title}
          </h1>
          {intro && (
            <p className={cn(styles.pageIntro, styles.enter)} style={{ animationDelay: "180ms" }}>
              {intro}
            </p>
          )}
          {children && (
            <div className={styles.enter} style={{ animationDelay: "260ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

interface ProseSection {
  title: string;
  paragraphs: string[];
}

/** Renders structured long-form content (guides, legal drafts). */
export function Prose({ sections }: { sections: ProseSection[] }) {
  return (
    <div className={styles.prose}>
      {sections.map((section) => (
        <section key={section.title} data-reveal>
          <h2>{section.title}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
