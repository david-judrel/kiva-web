"use client";

import type { Dictionary } from "@/i18n/get-dictionary";
import { contactService, waitlistService } from "@/lib/services";
import { validateContact, validateEmail } from "@/lib/validation";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { SelectField, TextArea, TextField } from "@/components/ui/Field";
import { useForm } from "./useForm";
import styles from "./PublicForms.module.css";

type Forms = Dictionary["forms"];

export function ContactForm({ forms, t }: { forms: Forms; t: Dictionary["contactPage"] }) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm(
    { name: "", email: "", topic: "general", message: "" },
    validateContact,
  );
  const topics = (["general", "partnership", "press", "other"] as const).map((value) => ({ value, label: t.topics[value] }));

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={handleSubmit((v) => contactService.send(v))}>
      <div className={styles.row}>
        <TextField
          label={forms.name}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          error={errors.name && forms.errors[errors.name]}
          required
        />
        <TextField
          label={forms.email}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder={forms.emailPlaceholder}
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          error={errors.email && forms.errors[errors.email]}
          required
        />
      </div>
      <SelectField label={t.topics.label} name="topic" options={topics} value={values.topic} onChange={(e) => setField("topic", e.target.value)} />
      <TextArea
        label={forms.message}
        name="message"
        value={values.message}
        onChange={(e) => setField("message", e.target.value)}
        error={errors.message && forms.errors[errors.message]}
        required
      />
      <div>
        <Button type="submit" loading={status === "submitting"} loadingLabel={forms.submitting}>
          {forms.submit}
        </Button>
      </div>
      <div ref={statusRef}>
        {status === "unavailable" && (
          <Alert variant="warning" title={t.unavailableTitle} live="polite">
            {t.unavailableText}
          </Alert>
        )}
        {status === "error" && <Alert variant="error" title={forms.genericError} live="assertive" />}
      </div>
    </form>
  );
}

export function EarlyAccessForm({ forms, t }: { forms: Forms; t: Dictionary["earlyAccessPage"] }) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm({ email: "" }, (v) => {
    const email = validateEmail(v.email);
    return email ? { email } : {};
  });

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={handleSubmit((v) => waitlistService.join(v))}>
      <div className={styles.inline}>
        <TextField
          label={forms.email}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder={forms.emailPlaceholder}
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          error={errors.email && forms.errors[errors.email]}
          required
        />
        <Button type="submit" loading={status === "submitting"} loadingLabel={forms.submitting} className={styles.inlineButton}>
          {forms.join}
        </Button>
      </div>
      <div ref={statusRef}>
        {status === "unavailable" && (
          <Alert variant="warning" title={t.unavailableTitle} live="polite">
            {t.unavailableText}
          </Alert>
        )}
        {status === "error" && <Alert variant="error" title={forms.genericError} live="assertive" />}
      </div>
    </form>
  );
}
