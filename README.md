# KIVA — Site web public

Site vitrine de KIVA en français et en anglais : Next.js 16 (App Router), React 19, TypeScript et CSS Modules.

## Démarrer

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000 (redirige vers /fr ou /en)
```

Production :

```bash
npm run build && npm run start
```

Vérifications : `npx tsc --noEmit`, `npm run lint`, `npm run build`.

Variable d'environnement : `NEXT_PUBLIC_SITE_URL` (URL publique, utilisée pour les URL canoniques, le sitemap et Open Graph). Valeur par défaut : `http://localhost:3000`.

## Langues

- Toutes les routes sont préfixées : `/fr/...` et `/en/...`. Les slugs restent en français dans les deux langues.
- `src/proxy.ts` redirige les URL sans préfixe (`/marches`) vers la langue préférée du navigateur, ou le français par défaut.
- Textes : `src/i18n/dictionaries/fr.ts`, la référence, et `en.ts`, typé `Dictionary` (une clé manquante en anglais fait échouer la compilation).
- Ajouter une langue : l'ajouter dans `src/i18n/config.ts`, créer son dictionnaire et l'enregistrer dans `get-dictionary.ts`.

## Organisation

| Dossier | Contenu |
| --- | --- |
| `src/app/[locale]/` | Pages (composition uniquement) |
| `src/components/ui/` | Primitives du design system : Button, Badge, Card, Field, Alert, Sparkline… |
| `src/components/layout/` | Header, navigation desktop et mobile, sélecteur de langue, Footer |
| `src/components/sections/` | Sections de la page d'accueil |
| `src/components/market/` | Aperçu du marché (recherche et filtres) |
| `src/components/auth/`, `forms/` | Formulaires et leur état |
| `src/config/` | Marque (`site.ts`), navigation, articles |
| `src/data/market-demo.ts` | **Données simulées**, jamais présentées comme réelles |
| `src/lib/` | Validation, formatage, services, métadonnées |

Les couleurs, espacements et rayons proviennent des tokens officiels : `src/styles/kiva-tokens.css`. C'est une copie de `../design-tokens/kiva.css` (dépôt `kiva`), resynchronisée automatiquement par `npm run dev` et `npm run build` quand le dossier parent existe (script `scripts/sync-tokens.mjs`). Ne jamais coder une valeur en dur.

## Renommer la marque

KIVA est un nom provisoire. Il suffit de modifier `site.name` dans `src/config/site.ts`.

## Ce qui n'est pas branché

`src/lib/services.ts` regroupe les points d'entrée vers les futurs services : connexion, inscription, réinitialisation du mot de passe, contact, accès anticipé. Aujourd'hui, ils ne transmettent ni ne stockent rien et renvoient `unavailable`, que l'interface affiche honnêtement. Pour brancher un backend, il suffit de remplacer ces fonctions : les composants gèrent déjà les états de chargement, de succès et d'erreur.

## Déploiement Netlify

Le dépôt [kiva-web](https://github.com/david-judrel/kiva-web) contient uniquement ce dossier. La configuration se trouve dans `netlify.toml`.

1. Sur Netlify : **Add new site → Import an existing project → GitHub → `david-judrel/kiva-web`**.
2. Laisser les réglages détectés : commande `npm run build`, dossier `.next`. Le runtime Next.js de Netlify est appliqué automatiquement.
3. Dans **Site configuration → Environment variables**, ajouter `NEXT_PUBLIC_SITE_URL` avec l'URL du site (par exemple `https://kiva.netlify.app`). Relancer ensuite un déploiement.
4. Les logos des sociétés (`public/logos`) s'affichent par défaut. Pour les masquer, définir `NEXT_PUBLIC_SHOW_ISSUER_LOGOS` = `false`.

Chaque push sur `main` redéploie le site.
