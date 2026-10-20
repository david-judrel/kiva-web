import { Check } from "lucide-react";
import type { Metadata } from "next";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { EarlyAccessForm } from "@/components/forms/PublicForms";
import { PageHeader } from "@/components/page/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/acces-anticipe">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.earlyAccessPage.title, description: dict.earlyAccessPage.intro, path: "/acces-anticipe" });
}

export default async function EarlyAccessPage({ params }: PageProps<"/[locale]/acces-anticipe">) {
  const { dict } = await resolveLocale(params);
  const t = dict.earlyAccessPage;

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} badge={<Badge>{dict.common.inDevelopment}</Badge>} />
      <section className="section">
        <div className={`container ${styles.twoCol}`}>
          <Card padding="lg" className={styles.stack}>
            <EarlyAccessForm forms={dict.forms} t={t} />
          </Card>
          <aside className={styles.aside}>
            <Card variant="muted">
              <ul className={styles.checkList}>
                {t.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={18} strokeWidth={2} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
