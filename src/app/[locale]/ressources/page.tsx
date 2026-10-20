import { CircleHelp } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/page/PageHeader";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/ressources">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.resourcesPage.title, description: dict.resourcesPage.intro, path: "/ressources" });
}

export default async function ResourcesPage({ params }: PageProps<"/[locale]/ressources">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.resourcesPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />
      <section id="guides" className={`section ${styles.anchorSection}`} aria-labelledby="guides-title">
        <div className={`container ${styles.stack}`}>
          <SectionHeading id="guides-title" title={t.guidesTitle} className={styles.flush} />
          <ArticleGrid locale={locale} dict={dict} />
          <Card variant="muted" className={styles.inlineCard}>
            <IconTile icon={CircleHelp} />
            <div className={styles.inlineCardCopy}>
              <h2 className={styles.cardTitle}>{t.faqTitle}</h2>
              <p className={styles.muted}>{t.faqText}</p>
            </div>
            <ButtonLink href={localizePath(locale, "/faq")} variant="secondary">
              {t.faqCta}
            </ButtonLink>
          </Card>
        </div>
      </section>
    </>
  );
}
