import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleSlugs, type ArticleSlug } from "@/config/navigation";
import { localizePath } from "@/i18n/config";
import { interpolate } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader, Prose } from "@/components/page/PageHeader";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import styles from "@/components/page/Page.module.css";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

function isArticleSlug(value: string): value is ArticleSlug {
  return (articleSlugs as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps<"/[locale]/ressources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!isArticleSlug(slug)) return {};
  const article = dict.articles[slug];
  return pageMetadata(locale, { title: article.title, description: article.summary, path: `/ressources/${slug}` });
}

export default async function ArticlePage({ params }: PageProps<"/[locale]/ressources/[slug]">) {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!isArticleSlug(slug)) notFound();
  const article = dict.articles[slug];
  const others = articleSlugs.filter((s) => s !== slug);

  return (
    <article>
      <PageHeader
        title={article.title}
        intro={article.summary}
        badge={
          <Link href={localizePath(locale, "/ressources")} className={styles.backLink}>
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            {dict.common.backToResources}
          </Link>
        }
      >
        <Badge icon={<Clock size={12} strokeWidth={2} aria-hidden="true" />}>
          {interpolate(dict.resourcesPage.readingTime, { minutes: article.minutes })}
        </Badge>
      </PageHeader>
      <div className={`section container ${styles.twoCol}`}>
        <div className={styles.stack}>
          <Prose sections={article.sections} />
          <Alert variant="warning" title={dict.legal.risks.title}>
            {dict.legal.risks.sections[0].paragraphs[0]}
          </Alert>
        </div>
        <aside className={styles.aside} aria-labelledby="more-guides">
          <Card className={styles.cardStack}>
            <h2 id="more-guides" className={styles.cardTitle}>
              {dict.resourcesPage.guidesTitle}
            </h2>
            <ul className={styles.linkList}>
              {others.map((s) => (
                <li key={s}>
                  <Link href={localizePath(locale, `/ressources/${s}`)}>
                    {dict.articles[s].title}
                    <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </article>
  );
}
