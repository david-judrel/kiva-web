import type { Metadata } from "next";
import { resolveLocale } from "@/i18n/server";
import { LegalPage, legalMetadata } from "@/components/page/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/conditions">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return legalMetadata(locale, dict, "terms", "/conditions");
}

export default async function TermsPage({ params }: PageProps<"/[locale]/conditions">) {
  const { dict } = await resolveLocale(params);
  return <LegalPage dict={dict} doc="terms" />;
}
