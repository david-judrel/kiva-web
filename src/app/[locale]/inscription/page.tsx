import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { AuthFlow } from "@/components/auth/AuthFlow";
import { RegisterForm } from "@/components/auth/AuthForms";
import { AuthLayout } from "@/components/auth/AuthLayout";

export async function generateMetadata({ params }: PageProps<"/[locale]/inscription">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.auth.register.title, description: dict.auth.register.subtitle, path: "/inscription" });
}

export default async function RegisterPage({ params }: PageProps<"/[locale]/inscription">) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.auth.register;
  return (
    <AuthLayout dict={dict} title={t.title} subtitle={t.subtitle}>
      <AuthFlow
        social={dict.auth.social}
        email={{ back: t.emailBack, note: t.emailNote }}
        switchTo={{ text: t.hasAccount, label: t.loginLink, href: localizePath(locale, "/connexion") }}
      >
        <RegisterForm
          forms={dict.forms}
          t={t}
          links={{
            terms: localizePath(locale, "/conditions"),
            privacy: localizePath(locale, "/confidentialite"),
            earlyAccess: localizePath(locale, "/acces-anticipe"),
          }}
        />
      </AuthFlow>
    </AuthLayout>
  );
}
