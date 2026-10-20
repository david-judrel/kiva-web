import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Alert } from "@/components/ui/Alert";
import { Card } from "@/components/ui/Card";
import { FeatureArt } from "@/components/illustrations/FeatureArt";
import styles from "./Auth.module.css";

interface AuthLayoutProps {
  dict: Dictionary;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AuthLayout({ dict, title, subtitle, children }: AuthLayoutProps) {
  // Module classes only: mixing global utilities (section/container) with overrides of the
  // same properties made the result depend on CSS load order (dev vs production).
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Card padding="lg" className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <Alert variant="warning">{dict.auth.unavailableBanner}</Alert>
          {children}
        </Card>
        <div className={styles.aside}>
          <div className={styles.asideArt}>
            <FeatureArt variant="shield" />
          </div>
          <Card variant="highlight" padding="lg" className={styles.asideCard}>
            <h2 className={styles.asideTitle}>{dict.auth.aside.title}</h2>
            <ul className={styles.asideList}>
              {dict.auth.aside.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
