"use client";

import { Search, SearchX } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import type { SectorKey } from "@/data/market-demo";
import type { MarketRow } from "@/lib/market";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { AssetCoin } from "@/components/ui/AssetCoin";
import { ChangeIndicator } from "@/components/ui/ChangeIndicator";
import { DemoBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { TextField } from "@/components/ui/Field";
import { Sparkline } from "@/components/ui/Sparkline";
import styles from "./MarketOverview.module.css";

export interface MarketOverviewLabels {
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  all: string;
  results: string;
  resultsOne: string;
  columns: { company: string; sector: string; country: string; price: string; change: string; trend: string };
  empty: { title: string; text: string; reset: string };
  demoData: string;
  demoDisclaimer: string;
  caption: string;
}

interface MarketOverviewProps {
  rows: MarketRow[];
  sectors: { key: SectorKey; label: string }[];
  labels: MarketOverviewLabels;
  showSearch?: boolean;
  limit?: number;
}

function normalize(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function MarketOverview({ rows, sectors, labels, showSearch = true, limit }: MarketOverviewProps) {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<SectorKey | "all">("all");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    const result = rows.filter(
      (row) =>
        (sector === "all" || row.sector === sector) &&
        (!q || normalize(row.name).includes(q) || (row.ticker && normalize(row.ticker).includes(q))),
    );
    return limit ? result.slice(0, limit) : result;
  }, [rows, sector, deferredQuery, limit]);

  const count = filtered.length === 1 ? labels.resultsOne : labels.results.replace("{count}", String(filtered.length));
  const reset = () => {
    setQuery("");
    setSector("all");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        {showSearch && (
          <div className={styles.search}>
            <TextField
              type="search"
              label={labels.searchLabel}
              placeholder={labels.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              leading={<Search size={18} strokeWidth={1.75} aria-hidden="true" />}
              autoComplete="off"
            />
          </div>
        )}
        <div className={styles.filters} role="group" aria-label={labels.filterLabel}>
          {[{ key: "all" as const, label: labels.all }, ...sectors].map((s) => (
            <button
              key={s.key}
              type="button"
              className={cn(styles.chip, sector === s.key && styles.chipActive)}
              aria-pressed={sector === s.key}
              onClick={() => setSector(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableCard} data-reveal>
        <div className={styles.tableHeader}>
          <p className={styles.count} aria-live="polite">
            {count}
          </p>
          <DemoBadge label={labels.demoData} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<SearchX size={24} strokeWidth={1.75} />}
            title={labels.empty.title}
            text={labels.empty.text}
            action={
              <Button variant="secondary" size="sm" onClick={reset}>
                {labels.empty.reset}
              </Button>
            }
          />
        ) : (
          <table className={styles.table}>
            <caption className="visually-hidden">{labels.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{labels.columns.company}</th>
                <th scope="col" className={styles.hideSm}>
                  {labels.columns.sector}
                </th>
                <th scope="col" className={styles.num}>
                  {labels.columns.price}
                </th>
                <th scope="col" className={styles.num}>
                  {labels.columns.change}
                </th>
                <th scope="col" className={cn(styles.trendCol, styles.hideSm)}>
                  {labels.columns.trend}
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id}>
                  <th scope="row" className={styles.company}>
                    <div className={styles.companyInner}>
                      <AssetCoin name={row.name} logo={row.logo} size="sm" className={styles.coin} />
                      <span className={styles.name}>{row.name}</span>
                      <span className={styles.meta}>
                        {row.ticker && <span className={styles.ticker}>{row.ticker}</span>}
                        {row.countryLabel}
                        <span className={styles.showSm}> · {row.sectorLabel}</span>
                      </span>
                    </div>
                  </th>
                  <td className={styles.hideSm}>{row.sectorLabel}</td>
                  <td className={cn(styles.num, styles.price)}>{row.price}</td>
                  <td className={styles.num}>
                    <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} />
                  </td>
                  <td className={cn(styles.trendCol, styles.hideSm)}>
                    <span className={styles.trend}>
                      <Sparkline values={row.series} direction={row.direction} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className={styles.disclaimer}>{labels.demoDisclaimer}</p>
      </div>
    </div>
  );
}
