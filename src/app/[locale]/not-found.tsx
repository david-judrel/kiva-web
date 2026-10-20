import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { fr } from "@/i18n/dictionaries/fr";
import { en } from "@/i18n/dictionaries/en";

/**
 * not-found.tsx receives no params, so the message is shown in both languages.
 */
export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <EmptyState
          icon={<Compass size={24} strokeWidth={1.75} />}
          title={`${fr.notFound.title} · ${en.notFound.title}`}
          text={`${fr.notFound.text} ${en.notFound.text}`}
          action={
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--kiva-space-3)", justifyContent: "center" }}>
              <ButtonLink href="/fr" variant="primary">
                {fr.common.backHome}
              </ButtonLink>
              <ButtonLink href="/en" variant="secondary" hrefLang="en">
                {en.common.backHome}
              </ButtonLink>
            </div>
          }
        />
      </div>
    </section>
  );
}
