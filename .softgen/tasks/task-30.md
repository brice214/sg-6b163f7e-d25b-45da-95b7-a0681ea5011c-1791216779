---
title: Traduction Blog (EN)
status: todo
priority: medium
type: feature
tags: [i18n, blog]
created_by: agent
created_at: 2026-10-22T15:30:00Z
position: 30
---
## Notes
Créer `src/pages/en/blog.tsx`, `src/pages/en/blog/[slug].tsx` et `src/pages/en/[category]/[slug].tsx`. Ne pas re-traduire tous les articles existants (14 articles en FR dans `src/data/blog-content/`) dans cette tâche — sélectionner les 4-5 articles les plus pertinents pour une audience internationale (choix de nom de domaine, sécurité SSL, comparatif VPS, optimisation WordPress) et créer leurs équivalents anglais dans `src/data/blog-content/en/`. Ajouter `/blog` à `AVAILABLE_EN_PATHS` une fois prêt.

## Checklist
- [ ] Traduire la page liste blog + catégories + pagination
- [ ] Traduire 4-5 articles prioritaires (contenu complet, pas de résumé)
- [ ] Traduire le composant BlogSidebar et RelatedArticles
- [ ] Ajouter `/blog` à `AVAILABLE_EN_PATHS`

## Acceptance
- `/en/blog` liste des articles traduits, chaque article EN accessible et lisible intégralement