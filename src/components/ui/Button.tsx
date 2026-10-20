import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "onDark" | "light";
export type ButtonSize = "md" | "sm";

interface StyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
}

export function buttonClassName({ variant = "primary", size = "md", block }: StyleProps, extra?: string) {
  return cn(styles.button, styles[variant], size === "sm" && styles.sm, block && styles.block, extra);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  loading?: boolean;
  loadingLabel?: string;
}

export function Button({
  variant,
  size,
  block,
  loading,
  loadingLabel,
  className,
  children,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, block }, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          {loadingLabel ?? children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> &
  StyleProps & { className?: string; children: ReactNode };

export function ButtonLink({ variant, size, block, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClassName({ variant, size, block }, className)} {...props}>
      {children}
    </Link>
  );
}
