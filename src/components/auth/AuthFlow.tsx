"use client";

import { ArrowLeft, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SocialAuth } from "./SocialAuth";
import styles from "./Auth.module.css";

interface AuthFlowProps {
  social: Dictionary["auth"]["social"];
  /** Text of the e-mail step, which differs between log in and sign up. */
  email: { back: string; note: string };
  /** Link under the form: create an account, or log in. Always visible. */
  switchTo: { text: string; label: string; href: string };
  /** The e-mail form, revealed by the "Continue with email" button. */
  children: ReactNode;
}

/**
 * Sign-in flow of the platforms: providers first, e-mail behind a button.
 * The fields are not shown until the user asks for them; focus then moves to
 * the first field of the revealed form, and back to the button on return.
 */
export function AuthFlow({ social, email, switchTo, children }: AuthFlowProps) {
  const [emailOpen, setEmailOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (emailOpen) {
      panelRef.current?.querySelector<HTMLElement>("input")?.focus();
    } else if (wasOpen.current) {
      ctaRef.current?.focus();
    }
    wasOpen.current = emailOpen;
  }, [emailOpen]);

  return (
    <div className={styles.flow}>
      <div className={styles.providers} hidden={emailOpen}>
        <SocialAuth t={social} />
        <p className={styles.divider}>
          <span>{social.divider}</span>
        </p>
      </div>
      <button
        type="button"
        ref={ctaRef}
        className={styles.emailCta}
        hidden={emailOpen}
        onClick={() => setEmailOpen(true)}
      >
        <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
        <span>{social.emailCta}</span>
        <ChevronRight className={styles.emailCtaArrow} size={18} strokeWidth={2} aria-hidden="true" />
      </button>
      <div className={styles.emailPanel} ref={panelRef} hidden={!emailOpen}>
        <button type="button" className={styles.back} onClick={() => setEmailOpen(false)}>
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
          {email.back}
        </button>
        <p className={styles.emailNote}>{email.note}</p>
        {children}
      </div>
      <p className={styles.switch}>
        {switchTo.text}{" "}
        <Link href={switchTo.href} className={styles.link}>
          {switchTo.label}
        </Link>
      </p>
    </div>
  );
}
