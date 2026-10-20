import type { Metadata } from "next";
import { resolveLocale } from "@/i18n/server";
import { LegalPage, legalMetadata } from "@/components/page/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/confidentialite">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return legalMetadata(locale, dict, "privacy", "/confidentialite");
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/confidentialite">) {
  const { dict } = await resolveLocale(params);
  return <LegalPage dict={dict} doc="privacy" />;
}
