import { FilePen } from "lucide-react";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { PageHeader, Prose } from "./PageHeader";
import styles from "./Page.module.css";

export type LegalDocument = keyof Dictionary["legal"];

export function legalMetadata(locale: Locale, dict: Dictionary, doc: LegalDocument, path: string): Metadata {
  return {
    ...pageMetadata(locale, { title: dict.legal[doc].title, path }),
    robots: { index: false }, // Drafts must not be indexed before legal review.
  };
}

/** Legal drafts: always labeled as unreviewed (see brand guidelines §4). */
export function LegalPage({ dict, doc }: { dict: Dictionary; doc: LegalDocument }) {
  const content = dict.legal[doc];
  return (
    <>
      <PageHeader
        title={content.title}
        badge={
          <Badge variant="warning" icon={<FilePen size={12} strokeWidth={2} aria-hidden="true" />}>
            {dict.common.draft}
          </Badge>
        }
      >
        <p className={styles.muted}>
          {dict.common.lastUpdated} {content.updated}
        </p>
      </PageHeader>
      <div className={`section container ${styles.stack}`}>
        <Alert variant="warning">{dict.common.draftLegal}</Alert>
        <Prose sections={content.sections} />
      </div>
    </>
  );
}
