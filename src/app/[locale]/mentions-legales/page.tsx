import type { Metadata } from "next";
import { resolveLocale } from "@/i18n/server";
import { LegalPage, legalMetadata } from "@/components/page/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/mentions-legales">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return legalMetadata(locale, dict, "legalNotice", "/mentions-legales");
}

export default async function LegalNoticePage({ params }: PageProps<"/[locale]/mentions-legales">) {
  const { dict } = await resolveLocale(params);
  return <LegalPage dict={dict} doc="legalNotice" />;
}
