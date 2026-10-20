import { ArrowRight, Info } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { getMarketLabels, getMarketRows, getSectorOptions } from "@/lib/market";
import { pageMetadata } from "@/lib/metadata";
import { MarketOverview } from "@/components/market/MarketOverview";
import { PageHeader } from "@/components/page/PageHeader";
import { DemoBadge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/marches">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.marketsPage.title, description: dict.marketsPage.intro, path: "/marches" });
}

export default async function MarketsPage({ params }: PageProps<"/[locale]/marches">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.marketsPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} badge={<DemoBadge label={dict.common.demoData} />} />
      <section id="actions" className={`section ${styles.anchorSection}`} aria-labelledby="actions-title">
        <div className={`container ${styles.twoCol}`}>
          <div>
            <SectionHeading id="actions-title" title={t.listTitle} text={t.listText} />
            <MarketOverview
              rows={getMarketRows(locale, dict)}
              sectors={getSectorOptions(dict)}
              labels={getMarketLabels(dict, t.listTitle)}
            />
          </div>
          <aside className={styles.aside}>
            <Card className={styles.cardStack}>
              <h2 className={`${styles.cardTitle} ${styles.headingIcon}`}>
                <Info size={18} strokeWidth={1.75} aria-hidden="true" />
                {t.sourceTitle}
              </h2>
              <ul className={styles.checkList}>
                {t.sourceItems.map((item) => (
                  <li key={item} className={styles.muted}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card variant="highlight" className={styles.cardStack}>
              <h2 className={styles.cardTitle}>{t.learnTitle}</h2>
              <p className={`${styles.muted} ${styles.onDarkMuted}`}>
                {t.learnText}
              </p>
              <ButtonLink href={localizePath(locale, "/ressources/comprendre-la-brvm")} variant="accent" size="sm">
                {dict.common.readArticle}
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </ButtonLink>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
