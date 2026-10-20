import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { ForgotPasswordForm } from "@/components/auth/AuthForms";
import { AuthLayout } from "@/components/auth/AuthLayout";

export async function generateMetadata({ params }: PageProps<"/[locale]/mot-de-passe-oublie">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.auth.forgot.title, description: dict.auth.forgot.subtitle, path: "/mot-de-passe-oublie" });
}

export default async function ForgotPasswordPage({ params }: PageProps<"/[locale]/mot-de-passe-oublie">) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <AuthLayout dict={dict} title={dict.auth.forgot.title} subtitle={dict.auth.forgot.subtitle}>
      <ForgotPasswordForm forms={dict.forms} t={dict.auth.forgot} links={{ login: localizePath(locale, "/connexion") }} />
    </AuthLayout>
  );
}
