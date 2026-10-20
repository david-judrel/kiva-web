/**
 * Form validation. Returns error *keys*; components map them to localized
 * messages from the dictionary (dict.forms.errors).
 */

export type ErrorKey =
  | "required"
  | "emailInvalid"
  | "passwordTooShort"
  | "passwordWeak"
  | "passwordMismatch"
  | "nameTooShort"
  | "termsRequired"
  | "messageTooShort";

export type FieldErrors<T extends string> = Partial<Record<T, ErrorKey>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PASSWORD_MIN = 10;

export function validateEmail(value: string): ErrorKey | undefined {
  if (!value.trim()) return "required";
  if (!EMAIL.test(value.trim())) return "emailInvalid";
}

export function validatePassword(value: string): ErrorKey | undefined {
  if (!value) return "required";
  if (value.length < PASSWORD_MIN) return "passwordTooShort";
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return "passwordWeak";
}

export function validateLogin(v: { email: string; password: string }) {
  const errors: FieldErrors<"email" | "password"> = {};
  errors.email = validateEmail(v.email);
  if (!v.password) errors.password = "required";
  return clean(errors);
}

export function validateRegister(v: {
  fullName: string;
  email: string;
  password: string;
  confirm: string;
  terms: boolean;
}) {
  const errors: FieldErrors<"fullName" | "email" | "password" | "confirm" | "terms"> = {};
  if (!v.fullName.trim()) errors.fullName = "required";
  else if (v.fullName.trim().length < 2) errors.fullName = "nameTooShort";
  errors.email = validateEmail(v.email);
  errors.password = validatePassword(v.password);
  if (!v.confirm) errors.confirm = "required";
  else if (v.confirm !== v.password) errors.confirm = "passwordMismatch";
  if (!v.terms) errors.terms = "termsRequired";
  return clean(errors);
}

export function validateContact(v: { name: string; email: string; message: string }) {
  const errors: FieldErrors<"name" | "email" | "message"> = {};
  if (!v.name.trim()) errors.name = "required";
  errors.email = validateEmail(v.email);
  if (!v.message.trim()) errors.message = "required";
  else if (v.message.trim().length < 20) errors.message = "messageTooShort";
  return clean(errors);
}

function clean<T extends string>(errors: FieldErrors<T>): FieldErrors<T> {
  for (const key of Object.keys(errors) as T[]) {
    if (errors[key] === undefined) delete errors[key];
  }
  return errors;
}

export function hasErrors(errors: Record<string, unknown>): boolean {
  return Object.keys(errors).length > 0;
}
