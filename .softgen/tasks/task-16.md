---
title: Optimisation SEO Globale
status: in_progress
priority: urgent
type: chore
tags: [seo, performance, gabon]
created_by: agent
created_at: 2026-10-05T14:49:03Z
position: 16
---
## Notes
Objectif : positionner SPIDERHOSTER en première page Google (et moteurs IA) au Gabon, puis en Afrique, puis à l'international, sur les requêtes "hébergement web Gabon", "hébergement WordPress Gabon", "VPS Gabon", "nom de domaine .ga", "hébergeur Libreville", etc.

Analyse concurrence (OVH, Hostinger, DigitalOcean, hébergeurs locaux) : ils dominent sur des mots-clés génériques mais aucun n'optimise la géolocalisation Gabon/Afrique centrale de façon aussi précise. Stratégie : dominer la longue traîne locale (ville + service) + structurer les données pour les moteurs IA (Schema.org riche = meilleure compréhension par les LLM/AI Overviews).

Domaine canonique : https://spiderhoster.com

## Checklist
- [x] Ajouter schema Organization/LocalBusiness JSON-LD global dans _document.tsx (adresse Libreville, géo, horaires, téléphone)
- [x] Corriger lang="fr" sur <Html> et ajouter meta geo.region/geo.placename
- [x] Mettre à jour titre/description par défaut du composant SEO avec mots-clés ciblés
- [ ] Créer sitemap.xml dynamique (pages/sitemap.xml.tsx) listant toutes les pages statiques + tous les articles de blog
- [ ] Créer public/robots.txt référençant le sitemap
- [ ] Optimiser balises title/description (mots-clés Gabon/Afrique/Libreville en tête) sur : Hébergement Web, WordPress, VPS, Domaines, Emails Pro, À propos, Blog, Contact
- [ ] Ajouter l'URL canonique (prop url) sur toutes les pages
- [ ] Ajouter schema FAQPage (JSON-LD) dans PageFAQ.tsx pour rich snippets
- [ ] Ajouter schema BreadcrumbList sur les pages d'articles de blog ([category]/[slug].tsx)
- [ ] Vérifier la hiérarchie H1/H2 et les textes alt des images clés pour les mots-clés principaux

## Acceptance
- Chaque page a un title et une meta description uniques et optimisés avec mots-clés Gabon/Afrique
- sitemap.xml et robots.txt sont accessibles et valides
- Le code source (view-source) contient les données structurées Organization + FAQPage