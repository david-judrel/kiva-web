import { ArrowRight, Check, ListChecks, Microscope, Minus, Search } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/page/PageHeader";
import { Alert } from "@/components/ui/Alert";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "@/components/page/Page.module.css";

const stepIcons = [Search, Microscope, ListChecks];

export async function generateMetadata({ params }: PageProps<"/[locale]/fonctionnement">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.howPage.title, description: dict.howPage.intro, path: "/fonctionnement" });
}

export default async function HowPage({ params }: PageProps<"/[locale]/fonctionnement">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.howPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <SectionHeading id="steps-title" title={t.stepsTitle} />
          <ol className={`${styles.grid3} ${styles.listReset}`}>
            {dict.home.how.steps.map((step, index) => (
              <Card as="li" key={step.title} className={styles.cardStack}>
                <IconTile icon={stepIcons[index]} />
                <h3 className={styles.cardTitle}>
                  <span className="visually-hidden">{index + 1}. </span>
                  {step.title}
                </h3>
                <p className={styles.muted}>{step.text}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      <section id="parcours" className={`section ${styles.anchorSection} ${styles.whiteBand}`} aria-labelledby="journey-title">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.stack}>
            <SectionHeading id="journey-title" title={t.journeyTitle} className={styles.flush} />
            <Alert variant="warning">{t.journeyIntro}</Alert>
            <ol className={styles.timeline}>
              {t.journey.map((step) => (
                <li key={step.title}>
                  <span className={styles.timelineTitle}>{step.title}</span>
                  <span className={styles.muted}>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className={styles.aside}>
            <Card variant="muted" className={styles.cardStack}>
              <h2 className={styles.cardTitle}>{t.todayTitle}</h2>
              <ul className={styles.checkList}>
                {t.todayItems.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card variant="muted" className={styles.cardStack}>
              <h2 className={styles.cardTitle}>{t.notYetTitle}</h2>
              <ul className={`${styles.checkList} ${styles.crossList}`}>
                {t.notYetItems.map((item) => (
                  <li key={item}>
                    <Minus size={18} strokeWidth={2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <ButtonLink href={localizePath(locale, "/acces-anticipe")} variant="primary" block>
              {t.cta}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
