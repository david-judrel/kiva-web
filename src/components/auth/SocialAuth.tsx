"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { authService, type OAuthProvider, type ServiceResult } from "@/lib/services";
import { Alert } from "@/components/ui/Alert";
import { AppleIcon, FacebookIcon, GoogleIcon } from "./SocialIcons";
import styles from "./Auth.module.css";

const PROVIDERS: { id: OAuthProvider; name: string; Icon: typeof GoogleIcon }[] = [
  { id: "google", name: "Google", Icon: GoogleIcon },
  { id: "apple", name: "Apple", Icon: AppleIcon },
  { id: "facebook", name: "Facebook", Icon: FacebookIcon },
];

/**
 * "Continue with Google / Apple / Facebook". Calls authService.oauth, which
 * currently reports "unavailable" (no provider is connected yet): nothing is
 * requested from or sent to the provider, and the user is told so.
 */
export function SocialAuth({ t }: { t: Dictionary["auth"]["social"] }) {
  const [pending, setPending] = useState<OAuthProvider | null>(null);
  const [result, setResult] = useState<{ provider: string; status: ServiceResult["status"] } | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) statusRef.current?.querySelector<HTMLElement>("[tabindex='-1']")?.focus();
  }, [result]);

  async function start(provider: OAuthProvider, name: string) {
    setPending(provider);
    setResult(null);
    try {
      const res = await authService.oauth({ provider });
      setResult({ provider: name, status: res.status });
    } catch {
      setResult({ provider: name, status: "error" });
    } finally {
      setPending(null);
    }
  }

  const fill = (text: string, provider: string) => text.replace("{provider}", provider);

  return (
    <div className={styles.social}>
      <ul className={styles.socialList} aria-label={t.label}>
        {PROVIDERS.map(({ id, name, Icon }) => (
          <li key={id}>
            <button
              type="button"
              className={cn(styles.socialButton, styles[`social_${id}`])}
              onClick={() => start(id, name)}
              disabled={pending !== null}
              aria-busy={pending === id || undefined}
            >
              {pending === id ? <span className={styles.socialSpinner} aria-hidden="true" /> : <Icon />}
              <span>{fill(t.continueWith, name)}</span>
            </button>
          </li>
        ))}
      </ul>
      <div ref={statusRef}>
        {result?.status === "unavailable" && (
          <Alert variant="warning" title={fill(t.unavailableTitle, result.provider)} live="polite">
            {fill(t.unavailableText, result.provider)}
          </Alert>
        )}
      </div>
      <p className={styles.divider}>
        <span>{t.divider}</span>
      </p>
    </div>
  );
}
