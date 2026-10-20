"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { ServiceResult } from "@/lib/services";
import type { FieldErrors } from "@/lib/validation";

export type FormStatus = "idle" | "submitting" | ServiceResult["status"];

/**
 * Minimal form state: validates on submit, then live once the user has tried
 * to submit; moves focus to the first invalid field or to the result message.
 */
export function useForm<V extends Record<string, string | boolean>, K extends string>(
  initial: V,
  validate: (values: V) => FieldErrors<K>,
) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors<K>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "idle" && status !== "submitting") statusRef.current?.querySelector<HTMLElement>("[tabindex='-1']")?.focus();
  }, [status]);

  function setField<F extends keyof V>(name: F, value: V[F]) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (attempted) setErrors(validate(next));
    if (status !== "idle" && status !== "submitting") setStatus("idle");
  }

  function handleSubmit(submit: (values: V) => Promise<ServiceResult>, sensitive: (keyof V)[] = []) {
    return async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setAttempted(true);
      const found = validate(values);
      setErrors(found);
      if (Object.keys(found).length > 0) {
        requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
        return;
      }
      setStatus("submitting");
      try {
        const result = await submit(values);
        setStatus(result.status);
      } catch {
        setStatus("error");
      }
      // Never keep secrets in memory longer than needed.
      if (sensitive.length) {
        setValues((current) => {
          const cleared = { ...current };
          for (const key of sensitive) cleared[key] = "" as V[typeof key];
          return cleared;
        });
      }
    };
  }

  return { values, errors, status, setField, handleSubmit, formRef, statusRef };
}
