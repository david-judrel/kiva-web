import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import styles from "./IconTile.module.css";

/** Square icon container used for feature lists and navigation items. */
export function IconTile({ icon: Icon, tone = "light", size = "md" }: { icon: LucideIcon; tone?: "light" | "dark"; size?: "sm" | "md" }) {
  return (
    <span className={cn(styles.tile, styles[tone], styles[size])} aria-hidden="true">
      <Icon size={size === "sm" ? 18 : 20} strokeWidth={1.75} />
    </span>
  );
}
