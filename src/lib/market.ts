import { demoInstruments, sectors, type SectorKey } from "@/data/market-demo";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { direction, formatChange, formatPrice, type Direction } from "./format";
import { issuerLogo, type IssuerLogo } from "./logos";

/** Serializable, pre-formatted row passed to client components. */
export interface MarketRow {
  id: string;
  name: string;
  ticker: string | null;
  /** Demo-only issuer logo URL (see lib/logos.ts), otherwise undefined. */
  logo?: IssuerLogo;
  sector: SectorKey;
  sectorLabel: string;
  countryLabel: string;
  price: string;
  change: string;
  direction: Direction;
  directionLabel: string;
  series: number[];
}

export function getMarketRows(locale: Locale, dict: Dictionary, ids?: string[]): MarketRow[] {
  const source = ids ? ids.map((id) => demoInstruments.find((i) => i.id === id)!).filter(Boolean) : demoInstruments;
  return source.map((i) => {
    const dir = direction(i.change);
    return {
      id: i.id,
      name: i.name,
      ticker: i.ticker,
      logo: issuerLogo(i.id),
      sector: i.sector,
      sectorLabel: dict.sectors[i.sector],
      countryLabel: dict.countries[i.country],
      price: formatPrice(locale, i.price),
      change: formatChange(locale, i.change),
      direction: dir,
      directionLabel: dict.market[dir],
      series: i.series,
    };
  });
}

export function getSectorOptions(dict: Dictionary) {
  return sectors.map((key) => ({ key, label: dict.sectors[key] }));
}

export function getMarketLabels(dict: Dictionary, caption: string) {
  return {
    ...dict.market,
    demoData: dict.common.demoData,
    demoDisclaimer: `${dict.common.demoDisclaimer} ${dict.market.tickerNote}`,
    caption,
  };
}
