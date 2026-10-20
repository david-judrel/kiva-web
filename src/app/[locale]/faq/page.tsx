import { Plus } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/page/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.faqPage.title, description: dict.faqPage.intro, path: "/faq" });
}

export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.faqPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />
      <section className="section">
        <div className={`container ${styles.stack}`}>
          {/* Native disclosure: keyboard and screen-reader support without client JavaScript. */}
          <div className={styles.faq}>
            {t.items.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus size={20} strokeWidth={1.75} aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <Card variant="muted" className={styles.inlineCard}>
            <div className={styles.inlineCardCopy}>
              <h2 className={styles.cardTitle}>{t.contactTitle}</h2>
            </div>
            <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
              {t.contactCta}
            </ButtonLink>
          </Card>
        </div>
      </section>
    </>
  );
}
