import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { articleSlugs } from "@/config/articles";
import { localizePath, type Locale } from "@/i18n/config";
import { interpolate, type Dictionary } from "@/i18n/get-dictionary";
import { revealDelay } from "@/components/motion/reveal";
import styles from "./ArticleGrid.module.css";

/** Learning-center guide cards (light surfaces). */
export function ArticleGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <ul className={styles.articles}>
      {articleSlugs.map((slug, i) => {
        const article = dict.articles[slug];
        return (
          <li key={slug} data-reveal style={revealDelay(i)}>
            <Link href={localizePath(locale, `/ressources/${slug}`)} className={styles.article}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.title}>{article.title}</span>
              <span className={styles.text}>{article.summary}</span>
              <span className={styles.meta}>
                {interpolate(dict.resourcesPage.readingTime, { minutes: article.minutes })}
                <span className={styles.link}>
                  {dict.common.readArticle}
                  <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
