import type { Metadata } from "next";
import { hasLocale } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import {
  AppShowcase,
  Features,
  Hero,
  HomeFaq,
  Learn,
  MarketCards,
  Partner,
  Steps,
  Ticker,
} from "@/components/home/Home";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return hasLocale(locale) ? pageMetadata(locale, { path: "/" }) : {};
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale, dict } = await resolveLocale(params);
  const props = { locale, dict };

  return (
    <>
      <Hero {...props} />
      <Ticker {...props} />
      <Features {...props} />
      <MarketCards {...props} />
      <Steps {...props} />
      <AppShowcase {...props} />
      <Learn {...props} />
      <Partner {...props} />
      <HomeFaq {...props} />
    </>
  );
}
