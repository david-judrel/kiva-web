"use client";

import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { waitlistService } from "@/lib/services";
import { validateEmail } from "@/lib/validation";
import { useForm } from "@/components/forms/useForm";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import styles from "./Home.module.css";

/** Inline early-access form in the hero. Honest: nothing is stored yet. */
export function HeroSignup({
  forms,
  t,
  joinLabel,
}: {
  forms: Dictionary["forms"];
  t: Dictionary["earlyAccessPage"];
  joinLabel: string;
}) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm({ email: "" }, (v) => {
    const email = validateEmail(v.email);
    return email ? { email } : {};
  });
  const error = errors.email && forms.errors[errors.email];

  return (
    <form ref={formRef} className={styles.signup} noValidate onSubmit={handleSubmit((v) => waitlistService.join(v))}>
      <div className={styles.signupRow}>
        <Mail className={styles.signupIcon} size={18} strokeWidth={1.75} aria-hidden="true" />
        <label htmlFor="hero-email" className="visually-hidden">
          {forms.email}
        </label>
        <input
          id="hero-email"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder={forms.emailPlaceholder}
          className={cn(styles.signupInput, error && styles.signupInvalid)}
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "hero-email-error" : undefined}
        />
        <Button type="submit" variant="accent" loading={status === "submitting"} loadingLabel={forms.submitting}>
          {joinLabel}
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </Button>
      </div>
      {error && (
        <p id="hero-email-error" className={styles.signupError}>
          {error}
        </p>
      )}
      <div ref={statusRef}>
        {status === "unavailable" && (
          <Alert variant="warning" title={t.unavailableTitle} live="polite">
            {t.unavailableText}
          </Alert>
        )}
      </div>
    </form>
  );
}

/** Horizontal scroll-snap carousel with previous/next buttons and pagination dots. */
export function Carousel({
  children,
  labels,
}: {
  children: ReactNode;
  labels: { previous: string; next: string; goTo: string };
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ start: true, end: false, active: 0, count: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const items = Array.from(track.children) as HTMLElement[];
      if (!items.length) return;
      const left = track.scrollLeft;
      const distance = (item: HTMLElement) => Math.abs(item.offsetLeft - items[0].offsetLeft - left);
      let active = 0;
      items.forEach((item, i) => {
        if (distance(item) < distance(items[active])) active = i;
      });
      const end = left + track.clientWidth >= track.scrollWidth - 4;
      setState({ start: left <= 4, end, active: end ? items.length - 1 : active, count: items.length });
    };
    const frame = requestAnimationFrame(update);
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const behavior = (): ScrollBehavior =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const items = track ? (Array.from(track.children) as HTMLElement[]) : [];
    if (!track || !items[index]) return;
    track.scrollTo({ left: items[index].offsetLeft - items[0].offsetLeft, behavior: behavior() });
  };

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: behavior() });
  };

  return (
    <div className={styles.carousel}>
      <ul ref={trackRef} className={styles.carouselTrack}>
        {children}
      </ul>
      <div className={styles.carouselControls}>
        <div className={styles.dots}>
          {Array.from({ length: state.count }, (_, i) => (
            <button
              key={i}
              type="button"
              className={cn(styles.dot, i === state.active && styles.dotActive)}
              aria-label={labels.goTo.replace("{n}", String(i + 1))}
              aria-current={i === state.active ? "true" : undefined}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button type="button" className={styles.carouselButton} onClick={() => scroll(-1)} disabled={state.start} aria-label={labels.previous}>
            <ArrowLeft size={20} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <button type="button" className={styles.carouselButton} onClick={() => scroll(1)} disabled={state.end} aria-label={labels.next}>
            <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Step indicator driven by scroll progress through the stacked step panels.
 * The panels are sticky (their own position stops changing), so progress is
 * measured on their list, which keeps scrolling. Connectors fill as you scroll.
 */
export function StepIndicator({ count, label }: { count: number; label: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const list = document.querySelector<HTMLElement>("[data-step-panel]")?.parentElement;
    if (!list) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const marker = window.innerHeight * 0.6;
      const value = (marker - rect.top) / Math.max(rect.height, 1);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 0 … count: how far through the steps (fractional between two steps).
  const position = progress * count;
  const active = Math.min(count - 1, Math.floor(position));

  return (
    <ol className={styles.stepper} aria-label={label}>
      {Array.from({ length: count }, (_, i) => {
        const state = i < active ? "done" : i === active ? "active" : "todo";
        // The connector before dot i fills while moving from step i-1 to step i.
        const fill = Math.min(1, Math.max(0, position - (i - 1)));
        return (
          <li
            key={i}
            className={cn(styles.stepItem, i > 0 && styles.stepItemLinked)}
            style={{ "--fill": fill } as CSSProperties}
            aria-current={state === "active" ? "step" : undefined}
          >
            <span className={cn(styles.stepDot, styles[`step_${state}`])}>
              {state === "done" ? (
                <>
                  <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                  <span className="visually-hidden">{i + 1}</span>
                </>
              ) : (
                i + 1
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
