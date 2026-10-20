import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { AuthFlow } from "@/components/auth/AuthFlow";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/AuthForms";

export async function generateMetadata({ params }: PageProps<"/[locale]/connexion">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.auth.login.title, description: dict.auth.login.subtitle, path: "/connexion" });
}

export default async function LoginPage({ params }: PageProps<"/[locale]/connexion">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.auth.login;
  return (
    <AuthLayout dict={dict} title={t.title} subtitle={t.subtitle}>
      <AuthFlow
        social={dict.auth.social}
        email={{ back: t.emailBack, note: t.emailNote }}
        switchTo={{ text: t.noAccount, label: t.signupLink, href: localizePath(locale, "/inscription") }}
      >
        <LoginForm forms={dict.forms} t={t} links={{ forgot: localizePath(locale, "/mot-de-passe-oublie") }} />
      </AuthFlow>
    </AuthLayout>
  );
}
