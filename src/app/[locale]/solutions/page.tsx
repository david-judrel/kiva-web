import { Briefcase, Check, Handshake, Info, User, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/page/PageHeader";
import { Alert } from "@/components/ui/Alert";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import styles from "@/components/page/Page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/solutions">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.solutionsPage.title, description: dict.solutionsPage.intro, path: "/solutions" });
}

export default async function SolutionsPage({ params }: PageProps<"/[locale]/solutions">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.solutionsPage;

  const blocks: { id: string; icon: LucideIcon; href: string; data: typeof t.individuals; note?: string; highlight?: boolean }[] = [
    { id: "particuliers", icon: User, href: "/marches", data: t.individuals },
    { id: "partenaires", icon: Handshake, href: "/contact", data: t.partners, note: t.partners.note, highlight: true },
    { id: "professionnels", icon: Briefcase, href: "/contact", data: t.professionals },
  ];

  return (
    <>
      <PageHeader title={t.title} intro={t.intro} />
      <section className={`section ${styles.stack}`}>
        <div className={`container ${styles.grid3}`}>
          {blocks.map((block) => (
            <Card
              key={block.id}
              id={block.id}
              as="section"
              variant={block.highlight ? "highlight" : "default"}
              className={cn(styles.cardStack, styles.anchorSection, block.highlight && styles.onDark)}
            >
              <IconTile icon={block.icon} tone={block.highlight ? "dark" : "light"} />
              <h2 className={styles.cardTitle}>{block.data.title}</h2>
              <p className={cn(styles.muted, block.highlight && styles.onDarkMuted)}>{block.data.text}</p>
              <ul className={cn(styles.checkList, styles.spaced)}>
                {block.data.items.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {block.note && (
                <p className={cn(styles.muted, styles.note, styles.onDarkMuted)}>
                  <Info size={16} strokeWidth={1.75} aria-hidden="true" />
                  {block.note}
                </p>
              )}
              <div className={cn(styles.ctas, styles.pushBottom)}>
                <ButtonLink href={localizePath(locale, block.href)} variant={block.highlight ? "accent" : "secondary"}>
                  {block.data.cta}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
        <div className="container">
          <Alert variant="info">{dict.footer.disclaimer}</Alert>
        </div>
      </section>
    </>
  );
}
