"use client";

import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import { authService } from "@/lib/services";
import { validateEmail, validateLogin, validateRegister, type ErrorKey } from "@/lib/validation";
import { Alert } from "@/components/ui/Alert";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Checkbox, PasswordField, TextField } from "@/components/ui/Field";
import { useForm, type FormStatus } from "@/components/forms/useForm";
import styles from "./Auth.module.css";

type Forms = Dictionary["forms"];
type Auth = Dictionary["auth"];

function errorText(forms: Forms, key: ErrorKey | undefined) {
  return key ? forms.errors[key] : undefined;
}

function StatusMessage({
  status,
  forms,
  unavailableTitle,
  unavailableText,
  action,
}: {
  status: FormStatus;
  forms: Forms;
  unavailableTitle: string;
  unavailableText: string;
  action?: React.ReactNode;
}) {
  if (status === "unavailable") {
    return (
      <Alert variant="warning" title={unavailableTitle} live="polite">
        <p>{unavailableText}</p>
        {action}
      </Alert>
    );
  }
  if (status === "error") {
    return <Alert variant="error" title={forms.genericError} live="assertive" />;
  }
  return null;
}

interface LoginFormProps {
  forms: Forms;
  t: Auth["login"];
  links: { forgot: string; register: string };
}

export function LoginForm({ forms, t, links }: LoginFormProps) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm(
    { email: "", password: "", remember: false as boolean },
    validateLogin,
  );

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={handleSubmit((v) => authService.login(v), ["password"])}>
      <TextField
        label={forms.email}
        type="email"
        name="email"
        autoComplete="email"
        inputMode="email"
        placeholder={forms.emailPlaceholder}
        value={values.email}
        onChange={(e) => setField("email", e.target.value)}
        error={errorText(forms, errors.email)}
        required
      />
      <PasswordField
        label={forms.password}
        name="password"
        autoComplete="current-password"
        value={values.password}
        onChange={(e) => setField("password", e.target.value)}
        error={errorText(forms, errors.password)}
        showLabel={forms.showPassword}
        hideLabel={forms.hidePassword}
        required
      />
      <div className={styles.row}>
        <Checkbox checked={values.remember} onChange={(e) => setField("remember", e.target.checked)}>
          {t.remember}
        </Checkbox>
        <Link href={links.forgot} className={styles.link}>
          {t.forgot}
        </Link>
      </div>
      <Button type="submit" block loading={status === "submitting"} loadingLabel={forms.submitting}>
        {t.submit}
      </Button>
      <div ref={statusRef}>
        <StatusMessage status={status} forms={forms} unavailableTitle={t.unavailableTitle} unavailableText={t.unavailableText} />
      </div>
      <p className={styles.switch}>
        {t.noAccount}{" "}
        <Link href={links.register} className={styles.link}>
          {t.signupLink}
        </Link>
      </p>
    </form>
  );
}

interface RegisterFormProps {
  forms: Forms;
  t: Auth["register"];
  links: { login: string; terms: string; privacy: string; earlyAccess: string };
}

export function RegisterForm({ forms, t, links }: RegisterFormProps) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm(
    { fullName: "", email: "", password: "", confirm: "", terms: false as boolean },
    validateRegister,
  );

  return (
    <form
      ref={formRef}
      className={styles.form}
      noValidate
      onSubmit={handleSubmit((v) => authService.register(v), ["password", "confirm"])}
    >
      <TextField
        label={forms.fullName}
        name="name"
        autoComplete="name"
        value={values.fullName}
        onChange={(e) => setField("fullName", e.target.value)}
        error={errorText(forms, errors.fullName)}
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
        error={errorText(forms, errors.email)}
        required
      />
      <PasswordField
        label={forms.password}
        name="new-password"
        autoComplete="new-password"
        hint={forms.passwordHint}
        value={values.password}
        onChange={(e) => setField("password", e.target.value)}
        error={errorText(forms, errors.password)}
        showLabel={forms.showPassword}
        hideLabel={forms.hidePassword}
        required
      />
      <PasswordField
        label={forms.confirmPassword}
        name="confirm-password"
        autoComplete="new-password"
        value={values.confirm}
        onChange={(e) => setField("confirm", e.target.value)}
        error={errorText(forms, errors.confirm)}
        showLabel={forms.showPassword}
        hideLabel={forms.hidePassword}
        required
      />
      <Checkbox checked={values.terms} onChange={(e) => setField("terms", e.target.checked)} error={errorText(forms, errors.terms)} required>
        {t.termsBefore}
        <Link href={links.terms}>{t.termsLink}</Link>
        {t.termsMiddle}
        <Link href={links.privacy}>{t.privacyLink}</Link>.
      </Checkbox>
      <Button type="submit" block loading={status === "submitting"} loadingLabel={forms.submitting}>
        {t.submit}
      </Button>
      <div ref={statusRef}>
        <StatusMessage
          status={status}
          forms={forms}
          unavailableTitle={t.unavailableTitle}
          unavailableText={t.unavailableText}
          action={
            <div>
              <ButtonLink href={links.earlyAccess} variant="secondary" size="sm">
                {t.earlyAccessCta}
              </ButtonLink>
            </div>
          }
        />
      </div>
      <p className={styles.switch}>
        {t.hasAccount}{" "}
        <Link href={links.login} className={styles.link}>
          {t.loginLink}
        </Link>
      </p>
    </form>
  );
}

interface ForgotPasswordFormProps {
  forms: Forms;
  t: Auth["forgot"];
  links: { login: string };
}

export function ForgotPasswordForm({ forms, t, links }: ForgotPasswordFormProps) {
  const { values, errors, status, setField, handleSubmit, formRef, statusRef } = useForm({ email: "" }, (v) => {
    const email = validateEmail(v.email);
    return email ? { email } : {};
  });

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={handleSubmit((v) => authService.requestPasswordReset(v))}>
      <TextField
        label={forms.email}
        type="email"
        name="email"
        autoComplete="email"
        inputMode="email"
        placeholder={forms.emailPlaceholder}
        value={values.email}
        onChange={(e) => setField("email", e.target.value)}
        error={errorText(forms, errors.email)}
        required
      />
      <Button type="submit" block loading={status === "submitting"} loadingLabel={forms.submitting}>
        {t.submit}
      </Button>
      <div ref={statusRef}>
        <StatusMessage status={status} forms={forms} unavailableTitle={t.unavailableTitle} unavailableText={t.unavailableText} />
      </div>
      <p className={styles.switch}>
        <Link href={links.login} className={styles.link}>
          {t.back}
        </Link>
      </p>
    </form>
  );
}
