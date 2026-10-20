# Logos des sociétés

Ces fichiers sont des marques appartenant aux sociétés cotées, utilisées ici pour la démonstration. Ils sont versionnés et **s'affichent par défaut**, en local comme en production.

Pour une société sans fichier, le site affiche la pièce neutre avec l'initiale. Pour masquer tous les logos sans supprimer les fichiers, définir `NEXT_PUBLIC_SHOW_ISSUER_LOGOS=false` (fichier `.env.local` ou variables Netlify).

Ces logos appartiennent à leurs titulaires : leur affichage sur un site public ne vaut pas partenariat. Obtenir l'accord des sociétés concernées avant un lancement officiel.

Nommage : `<id>.svg`, `<id>.png` ou `<id>.jpg`, avec l'`id` de `src/data/market-demo.ts` :

| id | Société | Fichier |
| --- | --- | --- |
| sonatel | Sonatel | sonatel.png |
| orange-ci | Orange Côte d'Ivoire | orange-ci.svg (logo du groupe Orange, Wikimedia Commons) |
| onatel | Onatel | manquant |
| sgci | Société Générale Côte d'Ivoire | sgci.svg (emblème du groupe, Wikimedia Commons) |
| eti | Ecobank Transnational Inc. | eti.png |
| sib | Société Ivoirienne de Banque | manquant |
| boa-benin | Bank of Africa Bénin | boa-benin.png (à vérifier) |
| palm-ci | Palm Côte d'Ivoire | manquant |
| sogb | SOGB | sogb.png |
| nestle-ci | Nestlé Côte d'Ivoire | nestle-ci.jpg |
| cie | CIE | manquant (icône de 16 px trop floue) |
| sodeci | SODECI | sodeci.png (à vérifier) |

Les fichiers actuels sont les icônes des sites officiels (favicons) : pour une présentation, remplacez-les de préférence par les versions haute définition des kits presse des sociétés. Format carré, fond transparent ou blanc, 256 px minimum.

Les images matricielles de moins de 96 px de côté sont ignorées automatiquement (trop floues sur les pièces). Après avoir ajouté ou remplacé un fichier, redémarrez le serveur (`npm run dev`) : la liste est lue au démarrage.
