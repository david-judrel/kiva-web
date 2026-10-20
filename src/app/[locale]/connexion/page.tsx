import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { LoginForm } from "@/components/auth/AuthForms";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialAuth } from "@/components/auth/SocialAuth";

export async function generateMetadata({ params }: PageProps<"/[locale]/connexion">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.auth.login.title, description: dict.auth.login.subtitle, path: "/connexion" });
}

export default async function LoginPage({ params }: PageProps<"/[locale]/connexion">) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <AuthLayout dict={dict} title={dict.auth.login.title} subtitle={dict.auth.login.subtitle}>
      <SocialAuth t={dict.auth.social} />
      <LoginForm
        forms={dict.forms}
        t={dict.auth.login}
        links={{ forgot: localizePath(locale, "/mot-de-passe-oublie"), register: localizePath(locale, "/inscription") }}
      />
    </AuthLayout>
  );
}
