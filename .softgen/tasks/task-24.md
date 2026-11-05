---
title: Traduction Accueil (EN)
status: done
priority: high
type: feature
tags: [i18n, homepage]
created_by: agent
created_at: 2026-10-22T15:19:45Z
position: 24
---
## Notes
Créer `src/pages/en/index.tsx` avec un contenu anglais pensé pour une clientèle internationale (pas une traduction mot à mot) : positionner SPIDERHOSTER comme un hébergeur fiable basé en Afrique avec datacenter à Libreville, vocabulaire orienté hébergeurs internationaux (uptime, latency, infrastructure), CTA type SaaS ("Get Started"). Réutiliser les composants de `src/components/homepage/*`, `src/components/Hero.tsx` en les rendant "locale-aware" via `useLanguage()` plutôt que de dupliquer les fichiers. Une fois la page créée et validée, ajouter `/` à `AVAILABLE_EN_PATHS` dans `src/lib/i18n/routes.ts` pour activer la redirection automatique du navigateur.

## Checklist
- [x] Traduire le Hero (titre, sous-titre, CTA)
- [x] Traduire Services (grille de services)
- [x] Traduire "Pourquoi SPIDERHOSTER" (arguments de confiance)
- [x] Traduire les Offres (noms de forfaits conservés, descriptions traduites)
- [x] Traduire Témoignages (adapter ou garder noms, traduire citations)
- [x] Traduire aperçu Blog et FAQ accueil
- [x] Ajouter `/` à la liste blanche des routes EN

## Acceptance
- `/en` affiche une page d'accueil entièrement en anglais, cohérente avec le header/footer EN
- Un visiteur non-francophone est automatiquement redirigé vers `/en` dès sa première visite