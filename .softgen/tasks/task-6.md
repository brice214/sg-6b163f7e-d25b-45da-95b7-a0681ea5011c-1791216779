---
title: SEO & Performance Optimization
status: in_progress
priority: high
type: chore
tags: [seo, performance, gabon]
created_by: agent
created_at: 2026-07-31T22:40:45Z
position: 6
---

## Notes
Objectif : positionner SPIDERHOSTER en première page Google (et moteurs IA) au Gabon, puis en Afrique, puis à l'international sur les requêtes "hébergement web Gabon", "hébergement WordPress Gabon", "VPS Gabon", "nom de domaine .ga", "hébergeur Libreville", "email professionnel Gabon", etc.

Analyse concurrence (OVH, Hostinger, DigitalOcean, hébergeurs locaux) : ils dominent sur des mots-clés génériques mais aucun n'optimise la géolocalisation Gabon/Afrique centrale de façon aussi précise. Stratégie retenue : dominer la longue traîne locale (ville + service) + structurer les données en Schema.org riche (meilleure compréhension par Google et les moteurs IA/LLM Overviews).

Domaine canonique : https://spiderhoster.com

## Checklist
- [x] Mettre à jour SEO.tsx avec défauts SPIDERHOSTER (titre/description optimisés + canonical)
- [x] Ajouter Schema.org Organization + LocalBusiness pour toutes les pages (_document.tsx)
- [x] Corriger lang="fr" et meta geo.region/geo.placename (Libreville/Gabon)
- [x] Créer sitemap.xml dynamique (pages + articles de blog)
- [x] Créer robots.txt optimisé référençant le sitemap
- [x] Ajouter données structurées FAQPage sur toutes les pages utilisant PageFAQ
- [x] Optimiser titre/description (mot-clé + Gabon en tête) : Accueil, Hébergement Web, WordPress, VPS, Domaines, Emails Pro, À propos, Contact, Blog
- [x] Ajouter l'URL canonique (prop url) sur toutes les pages
- [x] Ajouter schema Article + BreadcrumbList sur les pages d'articles de blog
- [x] Aligner les H1 avec le mot-clé principal + Gabon (hébergement web/WordPress/VPS/emails/domaines)
- [ ] Vérifier le score Lighthouse (Performance/SEO/Accessibility > 95) via Bug Finder ou PageSpeed Insights

## Acceptance
- SEO optimisé pour "hébergement web Gabon/Afrique" avec sitemap, robots.txt et schémas structurés (Organization, FAQPage, Article, BreadcrumbList)
- Chaque page a un titre, une meta description et un H1 uniques, optimisés et cohérents entre eux
- Score Lighthouse à vérifier manuellement via Bug Finder (> 95 visé)