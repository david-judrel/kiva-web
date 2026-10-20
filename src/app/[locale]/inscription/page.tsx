import type { Metadata } from "next";
import { localizePath } from "@/i18n/config";
import { resolveLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { RegisterForm } from "@/components/auth/AuthForms";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SocialAuth } from "@/components/auth/SocialAuth";

export async function generateMetadata({ params }: PageProps<"/[locale]/inscription">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata(locale, { title: dict.auth.register.title, description: dict.auth.register.subtitle, path: "/inscription" });
}

export default async function RegisterPage({ params }: PageProps<"/[locale]/inscription">) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <AuthLayout dict={dict} title={dict.auth.register.title} subtitle={dict.auth.register.subtitle}>
      <SocialAuth t={dict.auth.social} />
      <RegisterForm
        forms={dict.forms}
        t={dict.auth.register}
        links={{
          login: localizePath(locale, "/connexion"),
          terms: localizePath(locale, "/conditions"),
          privacy: localizePath(locale, "/confidentialite"),
          earlyAccess: localizePath(locale, "/acces-anticipe"),
        }}
      />
    </AuthLayout>
  );
}
