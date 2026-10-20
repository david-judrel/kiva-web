/**
 * DEMONSTRATION DATA — NOT MARKET DATA.
 *
 * Company names refer to issuers listed on the BRVM. Every price, change and
 * series below is simulated and must always be displayed with a "Démo" label.
 * Ticker symbols are intentionally omitted until they are verified against an
 * official BRVM source; set `ticker` only with a verified value.
 */

export type SectorKey = "telecom" | "finance" | "agriculture" | "consumer" | "utilities";
export type CountryCode = "BJ" | "BF" | "CI" | "SN" | "TG";

export interface DemoInstrument {
  id: string;
  name: string;
  ticker: string | null;
  country: CountryCode;
  sector: SectorKey;
  /** Simulated price, in FCFA. */
  price: number;
  /** Simulated daily change, in percent. */
  change: number;
  /** Simulated closing series, oldest first. */
  series: number[];
}

export const sectors: SectorKey[] = ["telecom", "finance", "agriculture", "consumer", "utilities"];

type Seed = Omit<DemoInstrument, "series" | "ticker">;

const seeds: Seed[] = [
  { id: "sonatel", name: "Sonatel", country: "SN", sector: "telecom", price: 25000, change: 0.8 },
  { id: "orange-ci", name: "Orange Côte d'Ivoire", country: "CI", sector: "telecom", price: 14500, change: -0.4 },
  { id: "onatel", name: "Onatel", country: "BF", sector: "telecom", price: 2400, change: 0 },
  { id: "sgci", name: "Société Générale Côte d'Ivoire", country: "CI", sector: "finance", price: 18000, change: 1.5 },
  { id: "eti", name: "Ecobank Transnational Inc.", country: "TG", sector: "finance", price: 20, change: -2.1 },
  { id: "sib", name: "Société Ivoirienne de Banque", country: "CI", sector: "finance", price: 5000, change: 0.6 },
  { id: "boa-benin", name: "Bank of Africa Bénin", country: "BJ", sector: "finance", price: 5200, change: 1.1 },
  { id: "palm-ci", name: "Palm Côte d'Ivoire", country: "CI", sector: "agriculture", price: 7500, change: -1.3 },
  { id: "sogb", name: "SOGB", country: "CI", sector: "agriculture", price: 6000, change: 0.3 },
  { id: "nestle-ci", name: "Nestlé Côte d'Ivoire", country: "CI", sector: "consumer", price: 8000, change: 0.9 },
  { id: "cie", name: "CIE", country: "CI", sector: "utilities", price: 2200, change: -0.7 },
  { id: "sodeci", name: "SODECI", country: "CI", sector: "utilities", price: 5800, change: 0.2 },
];

/** Deterministic pseudo-random generator so server and client render identical charts. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Builds a simulated series that ends on `price` with an overall drift matching the sign of `change`. */
function simulateSeries(id: string, price: number, change: number, points = 24): number[] {
  const rand = mulberry32(hash(id));
  const drift = change === 0 ? 0 : Math.sign(change) * 0.004;
  const values = [price];
  for (let i = 1; i < points; i++) {
    const prev = values[i - 1];
    values.push(prev / (1 + drift + (rand() - 0.5) * 0.02));
  }
  return values.reverse();
}

export const demoInstruments: DemoInstrument[] = seeds.map((s) => ({
  ...s,
  ticker: null,
  series: simulateSeries(s.id, s.price, s.change),
}));

/** A simulated aggregate curve used in the hero panel. Not an index. */
export const demoOverviewSeries = simulateSeries("kiva-overview", 100, 1, 48);

/** Simulated portfolio shown in the app mockups. Always labeled as demonstration. */
export const demoPortfolio = {
  value: 1_250_000,
  change: 2.4,
  holdings: ["sonatel", "sgci", "nestle-ci"],
  series: simulateSeries("kiva-portfolio", 1_250_000, 2.4, 36),
};
