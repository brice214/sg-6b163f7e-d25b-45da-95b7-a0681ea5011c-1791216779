---
title: SEO & Performance Optimization
status: in_progress
priority: urgent
type: chore
tags: [seo, performance, gabon]
created_by: agent
created_at: 2026-07-31T22:40:45Z
position: 6
---

## Notes
Objectif : positionner SPIDERHOSTER en première page Google (et moteurs IA) au Gabon, puis en Afrique, puis à l'international sur les requêtes "hébergement web Gabon", "hébergement WordPress Gabon", "VPS Gabon", "nom de domaine .ga", "hébergeur Libreville", etc.

Analyse concurrence (OVH, Hostinger, DigitalOcean, hébergeurs locaux) : ils dominent sur des mots-clés génériques mais aucun n'optimise la géolocalisation Gabon/Afrique centrale de façon aussi précise. Stratégie : dominer la longue traîne locale (ville + service) + structurer les données pour les moteurs IA (Schema.org riche = meilleure compréhension par les LLM/AI Overviews).

Domaine canonique : https://spiderhoster.com

## Checklist
- [x] Mettre à jour SEO.tsx avec défauts SPIDERHOSTER (titre/description optimisés)
- [x] Ajouter Schema.org Organization + LocalBusiness pour toutes pages (_document.tsx)
- [x] Corriger lang="fr" et meta geo.region/geo.placename
- [x] Créer sitemap.xml dynamique avec toutes les pages + articles de blog
- [x] Créer robots.txt optimisé référençant le sitemap
- [x] Ajouter données structurées FAQPage sur toutes les pages utilisant PageFAQ
- [ ] Optimiser titre/description (mots-clés Gabon/Afrique/Libreville en tête) sur : Hébergement Web, WordPress, VPS, Domaines, Emails Pro, À propos, Contact
- [ ] Ajouter l'URL canonique (prop url) sur toutes les pages restantes
- [ ] Ajouter schema BreadcrumbList sur les pages d'articles de blog ([category]/[slug].tsx)
- [ ] Optimiser les images générées (compression, dimensions) et lazy loading
- [ ] Vérifier score Lighthouse (Performance/SEO/Accessibility > 95)
- [ ] Vérifier hiérarchie H1/H2 et textes alt pour mots-clés principaux

## Acceptance
- SEO optimisé pour "hébergement web Gabon/Afrique" avec sitemap, robots.txt et schémas structurés
- Chaque page a un titre et une meta description uniques et optimisés
- Score Lighthouse > 95 sur les pages principales