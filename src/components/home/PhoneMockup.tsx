import {
  BatteryFull,
  Bell,
  ChartLine,
  CirclePlus,
  Eye,
  History,
  House,
  LayoutGrid,
  Search,
  Signal,
  Star,
  User,
  Wallet,
  Wifi,
} from "lucide-react";
import { demoPortfolio } from "@/data/market-demo";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { direction, formatChange, formatPrice } from "@/lib/format";
import { getMarketRows } from "@/lib/market";
import { AssetCoin } from "@/components/ui/AssetCoin";
import { ChangeIndicator } from "@/components/ui/ChangeIndicator";
import { DemoBadge } from "@/components/ui/Badge";
import { Sparkline } from "@/components/ui/Sparkline";
import styles from "./PhoneMockup.module.css";

interface PhoneMockupProps {
  locale: Locale;
  dict: Dictionary;
  screen: "home" | "markets";
  className?: string;
}

/**
 * Illustration of the future app built from real components (not an image).
 * It follows the site theme. Every value is simulated and labeled "Démo".
 * Hidden from assistive tech: the surrounding section describes it in text.
 */
export function PhoneMockup({ locale, dict, screen, className }: PhoneMockupProps) {
  const t = dict.home.phone;
  const tabs = [
    { key: "home", label: t.tabs.home, icon: House },
    { key: "markets", label: t.tabs.markets, icon: ChartLine },
    { key: "invest", label: t.tabs.invest, icon: CirclePlus },
    { key: "portfolio", label: t.tabs.portfolio, icon: Wallet },
    { key: "profile", label: t.tabs.profile, icon: User },
  ] as const;

  return (
    <div className={cn(styles.phone, className)} aria-hidden="true">
      {/* Hardware buttons */}
      <span className={cn(styles.button, styles.btnAction)} />
      <span className={cn(styles.button, styles.btnVolUp)} />
      <span className={cn(styles.button, styles.btnVolDown)} />
      <span className={cn(styles.button, styles.btnPower)} />
      <div className={styles.bezel}>
        <div className={styles.screen}>
          <div className={styles.island}>
            <span className={styles.lens} />
          </div>
          <div className={styles.status}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Signal size={14} strokeWidth={2.5} />
              <Wifi size={14} strokeWidth={2.5} />
              <BatteryFull size={18} strokeWidth={2} />
            </span>
          </div>
        <div className={styles.appHeader}>
          {screen === "home" ? (
            <span className={styles.brand}>
              <span className={styles.brandMark}>{site.name.slice(0, 1)}</span>
              {site.name}
            </span>
          ) : (
            <span className={styles.screenTitle}>{t.marketsTitle}</span>
          )}
          <span className={styles.headerIcons}>
            <DemoBadge label={dict.common.demo} />
            {screen === "home" && (
              <>
                <Bell size={16} strokeWidth={1.75} />
                <span className={styles.avatar}>
                  <User size={13} strokeWidth={2} />
                </span>
              </>
            )}
          </span>
        </div>
        {screen === "home" ? <HomeScreen locale={locale} dict={dict} /> : <MarketsScreen locale={locale} dict={dict} />}
        <nav className={styles.tabbar}>
          {tabs.map(({ key, label, icon: Icon }) => (
            <span key={key} className={cn(styles.tab, key === screen && styles.tabActive)}>
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </span>
          ))}
        </nav>
          <span className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}

const actionIcons = [CirclePlus, Star, History, LayoutGrid];

function HomeScreen({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.phone;
  const holdings = getMarketRows(locale, dict, demoPortfolio.holdings);
  const dir = direction(demoPortfolio.change);
  return (
    <div className={styles.body}>
      <div className={cn(styles.balance, "dark-surface")}>
        <span className={styles.balanceLabel}>
          {t.portfolio}
          <Eye size={12} strokeWidth={2} />
        </span>
        <span className={styles.balanceValue}>{formatPrice(locale, demoPortfolio.value)}</span>
        <ChangeIndicator direction={dir} formatted={formatChange(locale, demoPortfolio.change)} directionLabel={dict.market[dir]} />
        <div className={styles.balanceChart}>
          <Sparkline values={demoPortfolio.series} direction="up" width={240} height={60} area tone="dark" draw />
        </div>
        <div className={styles.periods}>
          {t.periods.map((p, i) => (
            <span key={p} className={cn(styles.period, i === 2 && styles.periodActive)}>
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        {t.actions.map((label, i) => {
          const Icon = actionIcons[i];
          return (
            <span key={label} className={styles.action}>
              <span className={styles.actionIcon}>
                <Icon size={15} strokeWidth={1.75} />
              </span>
              {label}
            </span>
          );
        })}
      </div>
      <div className={styles.listHead}>
        <span>{t.positions}</span>
        <span className={styles.seeAll}>{t.seeAll} →</span>
      </div>
      <ul className={styles.list}>
        {holdings.map((row) => (
          <li key={row.id}>
            <AssetCoin name={row.name} logo={row.logo} size="xs" />
            <span className={styles.rowName}>
              {row.name}
              <small>{row.sectorLabel}</small>
            </span>
            <span className={styles.rowValue}>
              <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} />
              <small>{row.price}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MarketsScreen({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const rows = getMarketRows(locale, dict).slice(0, 6);
  return (
    <div className={styles.body}>
      <div className={styles.search}>
        <Search size={14} strokeWidth={2} />
        {dict.home.phone.search}
      </div>
      <div className={styles.chips}>
        <span className={styles.chipActive}>{dict.market.all}</span>
        <span>{dict.sectors.telecom}</span>
        <span>{dict.sectors.finance}</span>
      </div>
      <ul className={styles.list}>
        {rows.map((row) => (
          <li key={row.id}>
            <AssetCoin name={row.name} logo={row.logo} size="xs" />
            <span className={styles.rowName}>
              {row.name}
              <small>{row.countryLabel}</small>
            </span>
            <span className={styles.rowSpark}>
              <Sparkline values={row.series} direction={row.direction} width={56} height={22} />
            </span>
            <span className={styles.rowValue}>
              {row.price}
              <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
