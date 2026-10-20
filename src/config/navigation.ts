import {
  BookOpen,
  Briefcase,
  Building,
  ChartLine,
  CircleHelp,
  Coins,
  Compass,
  GraduationCap,
  Handshake,
  Info,
  Layers,
  Route,
  User,
  type LucideIcon,
} from "lucide-react";

/**
 * Site navigation. Labels live in the dictionaries (dict.nav.items[id]);
 * every href points to a page that exists in src/app/[locale].
 */

export type NavItemId =
  | "overview"
  | "brvm"
  | "companies"
  | "howInvesting"
  | "discoverShares"
  | "dividends"
  | "journey"
  | "individuals"
  | "partners"
  | "professionals"
  | "learning"
  | "guides"
  | "faq"
  | "about";

export type NavGroupId = "markets" | "invest" | "solutions" | "resources";

export interface NavItem {
  id: NavItemId;
  href: string;
  icon: LucideIcon;
}

export interface NavGroup {
  id: NavGroupId;
  items: NavItem[];
}

export const mainNavigation: NavGroup[] = [
  {
    id: "markets",
    items: [
      { id: "overview", href: "/marches", icon: ChartLine },
      { id: "brvm", href: "/marches#actions", icon: Layers },
      { id: "companies", href: "/entreprises", icon: Building },
    ],
  },
  {
    id: "invest",
    items: [
      { id: "howInvesting", href: "/fonctionnement", icon: Compass },
      { id: "discoverShares", href: "/ressources/comment-fonctionne-une-action", icon: BookOpen },
      { id: "dividends", href: "/ressources/dividendes", icon: Coins },
      { id: "journey", href: "/fonctionnement#parcours", icon: Route },
    ],
  },
  {
    id: "solutions",
    items: [
      { id: "individuals", href: "/solutions#particuliers", icon: User },
      { id: "partners", href: "/solutions#partenaires", icon: Handshake },
      { id: "professionals", href: "/solutions#professionnels", icon: Briefcase },
    ],
  },
  {
    id: "resources",
    items: [
      { id: "learning", href: "/ressources", icon: GraduationCap },
      { id: "guides", href: "/ressources#guides", icon: BookOpen },
      { id: "faq", href: "/faq", icon: CircleHelp },
      { id: "about", href: "/a-propos", icon: Info },
    ],
  },
];

export const footerNavigation = {
  explore: [
    { id: "markets", href: "/marches" },
    { id: "companies", href: "/entreprises" },
    { id: "howItWorks", href: "/fonctionnement" },
    { id: "resources", href: "/ressources" },
  ],
  company: [
    { id: "about", href: "/a-propos" },
    { id: "contact", href: "/contact" },
    { id: "partnerships", href: "/solutions#partenaires" },
    { id: "faq", href: "/faq" },
  ],
  legal: [
    { id: "privacy", href: "/confidentialite" },
    { id: "terms", href: "/conditions" },
    { id: "risks", href: "/risques" },
    { id: "legalNotice", href: "/mentions-legales" },
  ],
} as const;

export { articleSlugs, type ArticleSlug } from "./articles";
