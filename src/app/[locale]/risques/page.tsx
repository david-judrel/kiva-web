import type { Metadata } from "next";
import { resolveLocale } from "@/i18n/server";
import { LegalPage, legalMetadata } from "@/components/page/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/risques">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return legalMetadata(locale, dict, "risks", "/risques");
}

export default async function RisksPage({ params }: PageProps<"/[locale]/risques">) {
  const { dict } = await resolveLocale(params);
  return <LegalPage dict={dict} doc="risks" />;
}
