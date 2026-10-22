---
title: Infrastructure i18n FR/EN
status: done
priority: urgent
type: chore
tags: [i18n, infrastructure, seo]
created_by: agent
created_at: 2026-10-22T15:19:45Z
position: 23
---
## Notes
Mise en place du système bilingue FR/EN avant toute traduction de contenu. Contrainte: impossible de modifier next.config.mjs (restriction technique), donc pas d'option `i18n` native Next.js. Solution retenue: routing par préfixe `/en` avec fichiers de pages dédiés + middleware Edge (src/middleware.ts) pour la détection automatique de la langue du navigateur + cookie de mémorisation + contexte React pour les traductions de l'interface commune (Header/Footer).

Détection: si le cookie NEXT_LOCALE est absent, lecture de l'en-tête Accept-Language ; si français détecté, le visiteur reste en FR (racine) ; sinon redirection vers l'équivalent `/en` SI cette page existe déjà en anglais (liste blanche AVAILABLE_EN_PATHS). Les robots d'indexation (Googlebot, Bingbot, etc.) ne sont jamais redirigés automatiquement, pour préserver l'indexation FR existante.

Tant qu'aucune page n'est traduite, la liste blanche reste vide : zéro changement de comportement pour les visiteurs actuels (pas de régression). Chaque tâche de traduction suivante ajoutera son URL à la liste blanche pour activer la redirection automatique page par page.

## Checklist
- [x] Créer le dictionnaire de traductions `src/lib/i18n/` (types + fr.ts + en.ts + index.ts + routes.ts) pour le Header, le Footer et les libellés communs
- [x] Créer `src/contexts/LanguageContext.tsx` (détection de la locale via l'URL, fonction t(), lien vers l'équivalent dans l'autre langue)
- [x] Créer `src/middleware.ts` (détection Accept-Language + cookie NEXT_LOCALE + exclusion des robots + liste blanche des routes traduites)
- [x] Brancher `LanguageProvider` dans `_app.tsx`
- [x] Définir `<html lang>` dynamique dans `_document.tsx`
- [x] Convertir `Header.tsx` pour utiliser le dictionnaire (sélecteur de langue FR/EN visible uniquement si une version EN existe pour la page courante)
- [x] Convertir `Footer.tsx` pour utiliser le dictionnaire
- [x] Ajouter les balises hreflang (fr/en/x-default) dans `SEO.tsx`, générées uniquement pour les pages présentes dans la liste blanche

## Acceptance
- Le site français existant est strictement identique visuellement et fonctionnellement (aucune régression détectable)
- Un visiteur dont le navigateur n'est pas en français ne voit aucun changement tant qu'aucune page EN n'existe (liste blanche vide au départ)
- Le code est prêt à activer l'anglais page par page en ajoutant simplement l'URL à la liste blanche et en créant le fichier `/en/...` correspondant