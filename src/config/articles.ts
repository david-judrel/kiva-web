/** Learning-center article slugs (content lives in the dictionaries under `articles`). */
export const articleSlugs = [
  "comprendre-la-brvm",
  "comment-fonctionne-une-action",
  "dividendes",
  "risques",
] as const;
export type ArticleSlug = (typeof articleSlugs)[number];
