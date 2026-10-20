import { GraduationCap, Info, ShieldCheck, Sprout, Scale, type LucideIcon } from "lucide-react";
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

const principleIcons: LucideIcon[] = [Scale, GraduationCap, Sprout, ShieldCheck];

export async function generateMetadata({ params }: PageProps<"/[locale]/a-propos">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.aboutPage.title, description: dict.aboutPage.intro, path: "/a-propos" });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/a-propos">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.aboutPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />
      <section className="section" aria-labelledby="mission-title">
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.stack}>
            <SectionHeading id="mission-title" title={t.missionTitle} className={styles.flush} />
            <div className={styles.prose}>
              {t.mission.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className={styles.aside}>
            <Alert variant="info" title={t.statusTitle}>
              {t.status.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Alert>
            <ButtonLink href={localizePath(locale, "/contact")} variant="primary" block>
              {t.cta}
            </ButtonLink>
          </aside>
        </div>
      </section>
      <section className={`section ${styles.whiteBand}`} aria-labelledby="principles-title">
        <div className="container">
          <SectionHeading id="principles-title" title={t.principlesTitle} />
          <ul className={`${styles.grid2} ${styles.listReset}`}>
            {t.principles.map((principle, index) => (
              <Card as="li" key={principle.title} variant="muted" className={styles.cardStack}>
                <IconTile icon={principleIcons[index] ?? Info} />
                <h3 className={styles.cardTitle}>{principle.title}</h3>
                <p className={styles.muted}>{principle.text}</p>
              </Card>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
