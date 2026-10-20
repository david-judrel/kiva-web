import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  ChartLine,
  Check,
  CirclePlus,
  FlaskConical,
  House,
  Monitor,
  Play,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { articleSlugs } from "@/config/articles";
import { localizePath, type Locale } from "@/i18n/config";
import { interpolate, type Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { getMarketRows, type MarketRow } from "@/lib/market";
import { revealDelay } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ChangeIndicator } from "@/components/ui/ChangeIndicator";
import { AssetCoin } from "@/components/ui/AssetCoin";
import { DemoBadge } from "@/components/ui/Badge";
import { Sparkline } from "@/components/ui/Sparkline";
import { FeatureArt, type FeatureArtVariant } from "@/components/illustrations/FeatureArt";
import { Carousel, HeroSignup, StepIndicator } from "./HomeClient";
import { PhoneMockup } from "./PhoneMockup";
import styles from "./Home.module.css";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

/* ---------------------------------------------------------------- Hero */

/** Decorative scene: glow, light beam, foliage and candlesticks. Pure SVG/CSS. */
function HeroScene() {
  const candles = [
    [0, 120, 60],
    [26, 90, 80],
    [52, 110, 50],
    [78, 60, 90],
    [104, 80, 70],
    [130, 40, 110],
    [156, 70, 60],
    [182, 30, 120],
  ];
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.sceneGlow} />
      <div className={styles.beam} />
      <div className={styles.beamCore} />
      <svg className={styles.leaves} viewBox="0 0 260 520" fill="currentColor">
        <path d="M30 520 C10 420 40 340 130 300 C110 380 90 450 30 520Z" />
        <path d="M0 400 C20 320 80 280 170 290 C120 330 70 370 0 400Z" opacity="0.8" />
        <path d="M10 250 C40 170 110 140 200 160 C140 190 80 220 10 250Z" opacity="0.6" />
        <path d="M40 130 C60 70 120 40 190 60 C140 80 90 100 40 130Z" opacity="0.45" />
        <path d="M60 520 C70 470 100 430 150 410" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
      <svg className={styles.candles} viewBox="0 0 210 260">
        {candles.map(([x, top, height]) => (
          <g key={x}>
            <line x1={x + 6} x2={x + 6} y1={top - 18} y2={top + height + 18} />
            <rect x={x} y={top} width="12" height={height} rx="2" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Hero({ locale, dict }: Props) {
  const t = dict.home.hero;
  const [sonatel, orange] = getMarketRows(locale, dict, ["sonatel", "orange-ci"]);
  const words = (text: string, offset: number) =>
    text
      .split(" ")
      .filter(Boolean)
      .map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className={styles.word} style={{ animationDelay: `${120 + (offset + i) * 70}ms` }}>
            {word}
          </span>{" "}
        </span>
      ));
  const leadCount = t.titleLead.split(" ").filter(Boolean).length;
  const highlightCount = t.titleHighlight.split(" ").filter(Boolean).length;
  const storeIcons = [Apple, Play];

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <HeroScene />
      <div className={cn("container", styles.heroInner)}>
        <div className={styles.heroCopy}>
          <p className={cn(styles.heroEyebrow, styles.enter)}>
            <span className={styles.eyebrowMain}>
              <span className={styles.pulse} aria-hidden="true" />
              {t.eyebrowMain}
            </span>
            <span className={styles.eyebrowTag}>{t.eyebrowTag}</span>
          </p>
          <h1 id="hero-title" className={styles.heroTitle}>
            {words(t.titleLead, 0)}
            <br />
            <span className={styles.mark}>{words(t.titleHighlight, leadCount)}</span>
            <br />
            {words(t.titleTail, leadCount + highlightCount)}
          </h1>
          <p className={cn(styles.heroText, styles.enter)} style={{ animationDelay: "500ms" }}>
            {t.lead}
          </p>
          <div className={cn(styles.enter, styles.signupWrap)} style={{ animationDelay: "620ms" }}>
            <HeroSignup forms={dict.forms} t={dict.earlyAccessPage} joinLabel={t.join} />
            <p className={styles.heroNote}>
              <ShieldCheck size={16} strokeWidth={1.75} aria-hidden="true" />
              {t.privacy}
            </p>
          </div>
          {/* No app is published yet: informative badges, not links. */}
          <ul className={cn(styles.stores, styles.enter)} style={{ animationDelay: "740ms" }}>
            {t.stores.map((store, i) => {
              const Icon = storeIcons[i];
              return (
                <li key={store} className={styles.store}>
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  <span>
                    <small>{t.storeSoon}</small>
                    {store}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.phoneWrap}>
            <PhoneMockup locale={locale} dict={dict} screen="home" className={cn(styles.heroPhone, "dark-surface")} />
          </div>
          {[sonatel, orange].map((row, i) => (
            <div key={row.id} className={cn(styles.glassCard, i === 0 ? styles.cardA : styles.cardB)}>
              <AssetCoin name={row.name} logo={row.logo} size="sm" />
              <div className={styles.glassBody}>
                <span className={styles.glassTitle}>{row.name}</span>
                <DemoBadge label={dict.common.demo} className={styles.glassDemo} />
                <span className={styles.glassValue}>{row.price}</span>
                <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} />
              </div>
              <span className={styles.glassSpark}>
                <Sparkline values={row.series} direction="up" width={90} height={44} tone="dark" draw />
              </span>
            </div>
          ))}
          <Link href={localizePath(locale, "/risques")} className={cn(styles.glassCard, styles.cardC)}>
            <span className={styles.glassIcon}>
              <ShieldCheck size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className={styles.glassBody}>
              <span className={styles.glassTitle}>{t.cards.trustTitle}</span>
              <span className={styles.glassMeta}>{t.cards.trustText}</span>
            </div>
          </Link>
          <Link href={localizePath(locale, "/ressources")} className={cn(styles.glassCard, styles.cardD)}>
            <span className={cn(styles.glassIcon, styles.glassIconLime)}>
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className={styles.glassBody}>
              <span className={styles.glassTitle}>{t.cards.learnTitle}</span>
              <span className={styles.glassMeta}>{t.cards.learnText}</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Ticker */

export function Ticker({ locale, dict }: Props) {
  const rows = getMarketRows(locale, dict);
  const items = (hidden: boolean) => (
    <ul className={styles.tickerList} aria-hidden={hidden || undefined}>
      {rows.map((row) => (
        <li key={row.id} className={styles.tickerItem}>
          <span className={styles.tickerName}>{row.name}</span>
          <span className={styles.tickerPrice}>{row.price}</span>
          <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} tone="plain" />
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.ticker} aria-label={dict.home.ticker.region}>
      <span className={styles.tickerLabel}>
        <FlaskConical size={14} strokeWidth={2} aria-hidden="true" />
        {dict.home.ticker.label} · {dict.common.demo}
      </span>
      <div className={styles.tickerViewport}>
        <div className={styles.tickerTrack}>
          {items(false)}
          {items(true)}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Features */

export function Features({ locale, dict }: Props) {
  const t = dict.home.why;
  const art: { variant: FeatureArtVariant; labels?: string[] }[] = [
    { variant: "stack" },
    { variant: "orb", labels: [dict.articles["comprendre-la-brvm"].title, dict.home.hero.cards.learnText] },
    { variant: "natures", labels: t.mock.natures },
    { variant: "shield" },
  ];

  return (
    <section className={cn("section", styles.band)} aria-labelledby="features-title">
      <div className={cn("container", styles.featuresLayout)}>
        <div className={styles.featuresIntro} data-reveal>
          <p className={styles.eyebrow}>{dict.home.features.eyebrow}</p>
          <h2 id="features-title" className={styles.sectionTitle}>
            {dict.home.features.title}
          </h2>
          <ButtonLink href={localizePath(locale, "/fonctionnement")} variant="onDark" size="sm">
            {dict.common.learnMore}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </ButtonLink>
        </div>
        <Carousel labels={{ previous: dict.common.previous, next: dict.common.next, goTo: dict.common.goTo }}>
          {t.items.map((item, i) => (
            <li key={item.title} className={styles.featureCard} data-reveal style={revealDelay(i)}>
              <div className={styles.featureHead}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
              <div className={styles.featureVisual}>
                <FeatureArt variant={art[i].variant} labels={art[i].labels} />
              </div>
            </li>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Markets */

export function MarketCards({ locale, dict }: Props) {
  const t = dict.home.markets;
  const [featured, ...others] = getMarketRows(locale, dict, ["sonatel", "sgci", "orange-ci", "nestle-ci"]);

  return (
    <section className="section" aria-labelledby="markets-title">
      <div className="container">
        <div className={styles.sectionHead} data-reveal>
          <div>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 id="markets-title" className={styles.sectionTitle}>
              {t.title}
            </h2>
          </div>
          <ButtonLink href={localizePath(locale, "/marches")} variant="onDark" size="sm">
            {t.cta}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className={styles.marketGrid}>
          <article className={cn(styles.marketCard, styles.marketFeatured)} data-reveal="scale">
            <div className={styles.featuredTop}>
              <AssetCoin name={featured.name} logo={featured.logo} size="xl" spin />
              <div className={styles.featuredInfo}>
                <span className={styles.featuredKicker}>{t.featured}</span>
                <h3 className={styles.featuredName}>{featured.name}</h3>
                <span className={styles.featuredPrice}>{featured.price}</span>
                <ChangeIndicator direction={featured.direction} formatted={featured.change} directionLabel={featured.directionLabel} tone="dark" />
              </div>
            </div>
            <div className={styles.featuredChart}>
              <Sparkline values={featured.series} direction="up" width={520} height={120} area tone="dark" draw />
            </div>
            <div className={styles.featuredFoot}>
              <DemoBadge label={dict.common.demoData} tone="dark" />
              <span className={styles.featuredSector}>
                {featured.sectorLabel} · {featured.countryLabel}
              </span>
            </div>
          </article>
          {others.map((row, i) => (
            <MarketCard key={row.id} row={row} dict={dict} index={i + 1} />
          ))}
        </div>
        <p className={styles.footnote} data-reveal="fade">
          {dict.common.demoDisclaimer}
        </p>
      </div>
    </section>
  );
}

function MarketCard({ row, dict, index }: { row: MarketRow; dict: Dictionary; index: number }) {
  const t = dict.home.markets;
  return (
    <article className={styles.marketCard} data-reveal style={revealDelay(index)}>
      <div className={styles.marketVisual}>
        <AssetCoin name={row.name} logo={row.logo} size="lg" />
      </div>
      <div className={styles.marketBody}>
        <div className={styles.marketPriceRow}>
          <span className={styles.marketPrice}>{row.price}</span>
          <DemoBadge label={dict.common.demo} tone="dark" />
        </div>
        <h3 className={styles.marketName}>{row.name}</h3>
        <dl className={styles.marketStats}>
          <div>
            <dt>{t.change}</dt>
            <dd>
              <ChangeIndicator direction={row.direction} formatted={row.change} directionLabel={row.directionLabel} tone="dark" />
            </dd>
          </div>
          <div>
            <dt>{t.sector}</dt>
            <dd>{row.sectorLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

/* --------------------------------------------------------------- Steps */

export function Steps({ locale, dict }: Props) {
  const t = dict.home.how;
  const rows = getMarketRows(locale, dict, ["sonatel", "sgci", "palm-ci"]);
  const visuals = [
    <div key="discover" className={styles.stepMock}>
      <span className={styles.stepSearch}>
        <Search size={16} strokeWidth={2} aria-hidden="true" />
        {dict.home.phone.search}
      </span>
      {rows.map((row) => (
        <span key={row.id} className={styles.stepRow}>
          <AssetCoin name={row.name} logo={row.logo} size="sm" />
          {row.name}
          <small>{row.sectorLabel}</small>
        </span>
      ))}
    </div>,
    <div key="analyze" className={styles.stepMock}>
      <span className={styles.stepRow}>
        <AssetCoin name={rows[0].name} logo={rows[0].logo} size="sm" />
        {rows[0].name}
        <small>{rows[0].price}</small>
      </span>
      <div className={styles.stepChart}>
        <Sparkline values={rows[0].series} direction="up" width={320} height={90} area draw />
      </div>
      <span className={styles.stepNote}>{dict.common.demoData}</span>
    </div>,
    <div key="prepare" className={styles.stepMock}>
      {dict.howPage.journey.slice(0, 4).map((step, i) => (
        <span key={step.title} className={styles.stepCheck} data-done={i < 1 || undefined}>
          <Check size={14} strokeWidth={2.5} aria-hidden="true" />
          {step.title}
        </span>
      ))}
    </div>,
  ];

  return (
    <section className={cn("section", styles.band)} aria-labelledby="steps-title">
      <div className="container">
        <div className={styles.stepsShell}>
          <div className={styles.stepsHead}>
            <h2 id="steps-title" className={styles.stepsTitle}>
              {t.title}
            </h2>
            <StepIndicator count={t.steps.length} label={t.title} />
          </div>
          <ol className={styles.stepsList}>
            {t.steps.map((step, i) => (
              <li key={step.title} className={cn(styles.stepPanel, "light-surface")} data-step-panel data-variant={i} style={{ "--i": i } as CSSProperties}>
                <div className={styles.stepVisual}>{visuals[i]}</div>
                <div className={styles.stepCopy}>
                  <span className={styles.stepKicker}>
                    {String(i + 1).padStart(2, "0")} · {step.title}
                  </span>
                  <p className={styles.stepText}>{step.text}</p>
                  {i === t.steps.length - 1 && (
                    <ButtonLink href={localizePath(locale, "/fonctionnement")} variant="primary" size="sm">
                      {t.cta}
                      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                    </ButtonLink>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- App */

export function AppShowcase({ locale, dict }: Props) {
  const t = dict.home.app;
  const hero = dict.home.hero;
  const tileIcons = [House, ChartLine, CirclePlus, Wallet];
  const storeIcons = [Apple, Play];

  return (
    <section className="section" aria-labelledby="app-title">
      <div className="container">
        {/* Showcase panel: always dark, phones rise from its bottom edge. */}
        <div className={cn(styles.appPanel, "dark-surface")} data-reveal="scale">
          <div className={cn(styles.appPanelGrid, "grid-pattern")} aria-hidden="true" />
          <div className={styles.appPanelGlow} aria-hidden="true" />

          <div className={styles.appCopy}>
            <span className={styles.appBadge}>
              <span className={styles.pulse} aria-hidden="true" />
              {t.badge}
            </span>
            <h2 id="app-title" className={styles.appTitle}>
              {t.title}
            </h2>
            <p className={styles.appText}>{t.text}</p>
            <div className={styles.appActions}>
              <ButtonLink href={localizePath(locale, "/acces-anticipe")} variant="accent">
                {t.cta}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </ButtonLink>
            </div>
            {/* No app is published yet: informative badges, not links. */}
            <ul className={styles.stores}>
              {hero.stores.map((store, i) => {
                const Icon = storeIcons[i];
                return (
                  <li key={store} className={styles.store}>
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    <span>
                      <small>{hero.storeSoon}</small>
                      {store}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.appStage} aria-hidden="true">
            <PhoneMockup locale={locale} dict={dict} screen="home" className={cn(styles.appPhoneBack, "dark-surface")} />
            <PhoneMockup locale={locale} dict={dict} screen="markets" className={cn(styles.appPhoneFront, "light-surface")} />
            <span className={cn(styles.appChip, styles.appChipA)}>
              <Smartphone size={16} strokeWidth={1.75} />
              <Monitor size={16} strokeWidth={1.75} />
              {t.chips[0]}
            </span>
            <span className={cn(styles.appChip, styles.appChipB)}>
              <span className={styles.appChipDot} />
              {t.chips[1]}
            </span>
          </div>
        </div>

        <ul className={styles.appTiles}>
          {t.features.map((feature, i) => {
            const Icon = tileIcons[i];
            return (
              <li key={feature.title} className={styles.appTile} data-reveal style={revealDelay(i)}>
                <span className={styles.appTileIcon}>
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className={styles.appTileTitle}>{feature.title}</h3>
                <p className={styles.cardText}>{feature.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Learn */

export function Learn({ locale, dict }: Props) {
  const t = dict.home.education;
  return (
    <section className={cn("section", styles.band)} aria-labelledby="learn-title">
      <div className="container">
        <div className={styles.sectionHead} data-reveal>
          <div>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 id="learn-title" className={styles.sectionTitle}>
              {t.title}
            </h2>
            <p className={styles.sectionText}>{t.text}</p>
          </div>
          <ButtonLink href={localizePath(locale, "/ressources")} variant="onDark" size="sm">
            {t.cta}
          </ButtonLink>
        </div>
        <ul className={styles.learnGrid}>
          {articleSlugs.map((slug, i) => {
            const article = dict.articles[slug];
            return (
              <li key={slug} data-reveal style={revealDelay(i)}>
                <Link href={localizePath(locale, `/ressources/${slug}`)} className={styles.learnCard}>
                  <span className={styles.learnIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.learnTitle}>{article.title}</span>
                  <span className={styles.cardText}>{article.summary}</span>
                  <span className={styles.learnMeta}>
                    {interpolate(dict.resourcesPage.readingTime, { minutes: article.minutes })}
                    <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Partner */

export function Partner({ locale, dict }: Props) {
  const t = dict.home.partners;
  return (
    <section className={styles.partnerSection} aria-labelledby="partner-title">
      <div className="container">
        <div className={cn(styles.partnerCard, "light-surface")} data-reveal="scale">
          <div className={styles.partnerCopy}>
            <p className={styles.partnerEyebrow}>{t.eyebrow}</p>
            <h2 id="partner-title" className={styles.partnerTitle}>
              {t.title}
            </h2>
            <p className={styles.partnerText}>{t.text}</p>
            <div className={styles.ctas}>
              <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
                {t.cta}
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={localizePath(locale, "/solutions#partenaires")} variant="ghost">
                {t.secondary}
              </ButtonLink>
            </div>
          </div>
          <ul className={styles.partnerPoints}>
            {t.points.map((point, i) => (
              <li key={point} data-reveal style={revealDelay(i + 1)}>
                <span className={styles.partnerCheck}>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

export function HomeFaq({ locale, dict }: Props) {
  const t = dict.home.faqBlock;
  return (
    <section className={cn("section", styles.band)} aria-labelledby="faq-title">
      <div className={cn("container", styles.faqGrid)}>
        <div className={styles.faqIntro} data-reveal>
          <h2 id="faq-title" className={styles.sectionTitle}>
            {t.title}
          </h2>
          <p className={styles.sectionText}>{t.text}</p>
          <ButtonLink href={localizePath(locale, "/faq")} variant="onDark" size="sm">
            {t.cta}
          </ButtonLink>
        </div>
        <div className={styles.faqList}>
          {dict.faqPage.items.slice(0, 5).map((item, i) => (
            <details key={item.q} className={styles.faqItem} data-reveal style={revealDelay(i)}>
              <summary>
                {item.q}
                <Plus size={20} strokeWidth={1.75} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
