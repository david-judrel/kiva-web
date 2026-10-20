import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Alert } from "@/components/ui/Alert";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import styles from "./Auth.module.css";

interface AuthLayoutProps {
  dict: Dictionary;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AuthLayout({ dict, title, subtitle, children }: AuthLayoutProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Card padding="lg" className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <Alert variant="warning">{dict.auth.unavailableBanner}</Alert>
          {children}
        </Card>
        <Card variant="highlight" padding="lg" className={styles.aside}>
          <IconTile icon={ShieldCheck} tone="dark" />
          <h2 className={styles.asideTitle}>{dict.auth.aside.title}</h2>
          <ul className={styles.asideList}>
            {dict.auth.aside.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
