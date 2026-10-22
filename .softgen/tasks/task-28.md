---
title: Traduction Noms de Domaine (EN)
status: todo
priority: high
type: feature
tags: [i18n, domains]
created_by: agent
created_at: 2026-10-22T15:30:00Z
position: 28
---
## Notes
Créer `src/pages/en/domaines.tsx`, miroir anglais de `domaines.tsx` (403 lignes — vérifier si une extraction en sous-composants est nécessaire avant traduction pour rester sous 300 lignes). Vocabulaire "Domain Registration", mettre en avant le TLD .ga comme différenciateur pour présence Afrique/Gabon vis-à-vis de clients internationaux. Ajouter `/domaines` à `AVAILABLE_EN_PATHS` une fois prêt.

## Checklist
- [ ] Traduire le bloc de recherche de domaine
- [ ] Traduire le tableau des extensions et tarifs
- [ ] Traduire la FAQ dédiée
- [ ] Ajouter `/domaines` à `AVAILABLE_EN_PATHS`

## Acceptance
- `/en/domaines` entièrement en anglais