import { Handshake, Mail } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/forms/PublicForms";
import { PageHeader } from "@/components/page/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.contactPage.title, description: dict.contactPage.intro, path: "/contact" });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.contactPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <Card padding="lg" className={styles.stack}>
            <h2 className={styles.cardTitle}>{t.formTitle}</h2>
            <ContactForm forms={dict.forms} t={t} />
          </Card>
          <aside className={styles.aside}>
            <Card className={styles.cardStack}>
              <IconTile icon={Mail} />
              <h2 className={styles.cardTitle}>{t.emailTitle}</h2>
              {site.contactEmail ? (
                <a href={`mailto:${site.contactEmail}`} className={styles.backLink}>
                  {site.contactEmail}
                </a>
              ) : (
                <p className={styles.muted}>{t.noEmail}</p>
              )}
            </Card>
            <Card variant="highlight" className={styles.cardStack}>
              <IconTile icon={Handshake} tone="dark" />
              <h2 className={styles.cardTitle}>{dict.solutionsPage.partners.title}</h2>
              <p className={`${styles.muted} ${styles.onDarkMuted}`}>{dict.solutionsPage.partners.text}</p>
              <ButtonLink href={localizePath(locale, "/solutions#partenaires")} variant="onDark" size="sm">
                {dict.common.learnMore}
              </ButtonLink>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
