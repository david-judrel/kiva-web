import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Alert.module.css";

type AlertVariant = "info" | "warning" | "success" | "error";

const icons = { info: Info, warning: TriangleAlert, success: CircleCheck, error: CircleAlert };

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: ReactNode;
  /** "polite" announces dynamic results; "assertive" for blocking errors. Omit for static notices. */
  live?: "polite" | "assertive";
  className?: string;
  id?: string;
}

export function Alert({ variant = "info", title, children, live, className, id }: AlertProps) {
  const Icon = icons[variant];
  return (
    <div
      id={id}
      className={cn(styles.alert, styles[variant], className)}
      role={live === "assertive" ? "alert" : live === "polite" ? "status" : undefined}
      tabIndex={live ? -1 : undefined}
    >
      <Icon className={styles.icon} size={20} strokeWidth={1.75} aria-hidden="true" />
      <div className={styles.body}>
        {title && <p className={styles.title}>{title}</p>}
        {children && <div className={styles.text}>{children}</div>}
      </div>
    </div>
  );
}
