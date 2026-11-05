---
title: Multi-devise portail & vérification Search Console
status: in_progress
priority: urgent
type: feature
tags: [i18n, pricing, seo]
created_by: agent
created_at: 2026-11-05T07:50:00Z
position: 35
---
## Notes
Ajouter `&language=english&currency=5` (anglais/USD), `&language=french&currency=4` (français/Europe/EUR) ou `&language=french&currency=1` (français/Gabon-Afrique/FCFA) sur toutes les URLs du portail client (`portail.spiderhoster.com/index.php?rp=/store/...`), selon la langue du site (FR/EN déjà détectée) et le pays du visiteur pour le FR (Europe vs Afrique), détecté via géolocalisation Vercel Edge dans le middleware (cookie `NEXT_REGION`, fallback Afrique si indisponible en dev/preview).

Convertir et afficher tous les prix des forfaits dans la devise correspondante (FCFA de base, conversion taux fixe XAF/EUR 655.957, approximation XAF/USD ~610) partout où un montant de forfait est affiché : page d'accueil (Offers.tsx), Hébergement Web/WordPress/VPS, Emails Professionnels, composant partagé PricingSection.tsx, calculateur.

Ajouter la balise meta Google Search Console uniquement sur la page d'accueil (`src/pages/index.tsx`), dans le `<head>`.

## Checklist
- [ ] Créer `src/lib/i18n/portal.ts` (région EU/Afrique, construction des paramètres langue/devise, conversion de prix)
- [ ] Étendre le middleware pour détecter le pays (géoloc Vercel) et poser le cookie `NEXT_REGION`
- [ ] Étendre `LanguageContext` pour exposer `region`, `formatPrice()` et `withPortalParams()`
- [ ] Mettre à jour `Offers.tsx` (accueil) : URLs + prix dynamiques
- [ ] Mettre à jour `PricingSection.tsx` (composant partagé) : URLs + prix dynamiques
- [ ] Vérifier/adapter `hebergement-web.tsx`, `hebergement-wordpress.tsx`, `hebergement-vps.tsx`, `emails-professionnels.tsx`
- [ ] Mettre à jour `calculator-logic.ts` et le calculateur si nécessaire
- [ ] Ajouter la balise `google-site-verification` dans le `<head>` de la page d'accueil

## Acceptance
- Un visiteur anglophone clique "Commander" → URL contient `language=english&currency=5`, prix affiché en $
- Un visiteur français en Europe → `language=french&currency=4`, prix affiché en €
- Un visiteur français au Gabon/Afrique → `language=french&currency=1`, prix affiché en FCFA (inchangé)
- La balise google-site-verification est visible dans le `<head>` de la page d'accueil