import Link from "next/link";
import { footerNavigation } from "@/config/navigation";
import { site } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

// Evaluated at build time: reading the clock during render would make every page dynamic.
const YEAR = new Date().getFullYear();

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const columns = [
    { id: "explore", title: dict.footer.columns.explore, links: footerNavigation.explore },
    { id: "company", title: dict.footer.columns.company, links: footerNavigation.company },
    { id: "legal", title: dict.footer.columns.legal, links: footerNavigation.legal },
  ] as const;

  return (
    <footer className={`${styles.footer} dark-surface`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo href={localizePath(locale, "/")} label={dict.nav.home} tone="dark" />
            <p className={styles.description}>{dict.footer.description}</p>
            {site.social.length > 0 && (
              <ul className={styles.social}>
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener noreferrer" target="_blank">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {columns.map((column) => (
            <nav key={column.id} aria-labelledby={`footer-${column.id}`} className={styles.column}>
              <h2 id={`footer-${column.id}`} className={styles.columnTitle}>
                {column.title}
              </h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link href={localizePath(locale, link.href)} className={styles.link}>
                      {dict.footer.links[link.id]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{dict.footer.disclaimer}</p>
          <p className={styles.copyright}>
            © {YEAR} {site.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
