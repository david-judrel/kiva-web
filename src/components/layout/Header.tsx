import { Info } from "lucide-react";
import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderShell } from "./HeaderShell";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./Header.module.css";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navLabels = {
    label: dict.nav.label,
    groups: dict.nav.groups,
    items: dict.nav.items,
  };

  return (
    <>
      <div className={`${styles.notice} dark-surface`}>
        <div className={`container ${styles.noticeInner}`}>
          <Info size={16} strokeWidth={1.75} aria-hidden="true" className={styles.noticeIcon} />
          <p>
            {dict.notice.banner}{" "}
            <Link href={localizePath(locale, "/fonctionnement")} className={styles.noticeLink}>
              {dict.notice.bannerLink}
            </Link>
          </p>
        </div>
      </div>
      <HeaderShell className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Logo href={localizePath(locale, "/")} label={dict.nav.home} />
          <DesktopNavigation locale={locale} labels={navLabels} />
          <div className={styles.actions}>
            <ThemeToggle labels={dict.theme} />
            <LanguageSwitcher locale={locale} label={dict.language.change} className={styles.desktopOnly} />
            <ButtonLink href={localizePath(locale, "/connexion")} variant="ghost" size="sm" className={styles.desktopOnly}>
              {dict.nav.login}
            </ButtonLink>
            <ButtonLink href={localizePath(locale, "/inscription")} variant="accent" size="sm" className={styles.signup}>
              {dict.nav.signup}
            </ButtonLink>
            <MobileNavigation
              locale={locale}
              labels={{
                ...navLabels,
                open: dict.nav.openMenu,
                close: dict.nav.closeMenu,
                home: dict.nav.home,
                login: dict.nav.login,
                signup: dict.nav.signup,
                language: dict.language.label,
                theme: dict.theme,
              }}
            />
          </div>
        </div>
      </HeaderShell>
    </>
  );
}
