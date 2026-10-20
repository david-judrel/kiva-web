import { cn } from "@/lib/cn";
import { AppleIcon } from "@/components/auth/SocialIcons";
import styles from "./StoreBadges.module.css";

/** Google Play mark (four-color triangle). Decorative: the badge text names the store. */
function GooglePlayIcon() {
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" aria-hidden="true" focusable="false">
      <path fill="#00A0FF" d="M1.1.6C.8.9.6 1.5.6 2.2v21.6c0 .7.2 1.3.5 1.6l.1.1L13.3 13.4v-.3L1.2.5z" />
      <path fill="#FFE000" d="M17.3 17.5l-4-4v-.3l4-4 .1.1 4.8 2.7c1.4.8 1.4 2 0 2.8l-4.8 2.7z" />
      <path fill="#FF3A44" d="M17.4 17.4L13.3 13.3 1.1 25.5c.5.5 1.2.5 2.1.1l14.2-8.2" />
      <path fill="#00F076" d="M17.4 9.2L3.2 1.1C2.3.6 1.6.7 1.1 1.2l12.2 12.1z" />
    </svg>
  );
}

interface StoreBadgesProps {
  /** Small top line, e.g. "Bientôt sur" (the app is not published yet). */
  soon: string;
  /** Store names, in order: App Store, Google Play. */
  stores: readonly string[];
  className?: string;
}

/**
 * App Store / Google Play badges in the stores' usual black badge style.
 * The app is not published: badges say "coming soon" and are not links.
 * Replace with the official badge artwork and store links at launch.
 */
export function StoreBadges({ soon, stores, className }: StoreBadgesProps) {
  const icons = [<AppleIcon key="apple" size={26} />, <GooglePlayIcon key="play" />];
  return (
    <ul className={cn(styles.badges, className)}>
      {stores.map((store, i) => (
        <li key={store} className={styles.badge}>
          <span className={cn(styles.icon, i === 0 && styles.apple)}>{icons[i]}</span>
          <span className={styles.text}>
            <small>{soon}</small>
            <span>{store}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
