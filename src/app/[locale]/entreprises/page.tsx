import { ArrowRight, Clock, FileText } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/page/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/entreprises">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.companiesPage.title, description: dict.companiesPage.intro, path: "/entreprises" });
}

export default async function CompaniesPage({ params }: PageProps<"/[locale]/entreprises">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.companiesPage;

  return (
    <>
      <PageHeader
        title={t.title}
        intro={t.intro}
        badge={
          <Badge variant="warning" icon={<Clock size={12} strokeWidth={2} aria-hidden="true" />}>
            {dict.common.comingSoon}
          </Badge>
        }
      />
      <section className="section">
        <div className="container">
          <Card padding="lg" className={styles.cardStack}>
            <h2 className={styles.cardTitle}>{t.contentTitle}</h2>
            <ul className={`${styles.checkList} ${styles.iconMuted} ${styles.spaced}`}>
              {t.contentItems.map((item) => (
                <li key={item}>
                  <FileText size={18} strokeWidth={1.75} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.ctas}>
              <ButtonLink href={localizePath(locale, "/marches")} variant="primary">
                {t.cta}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
