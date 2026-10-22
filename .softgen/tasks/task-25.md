---
title: Traduction Hébergement Web (EN)
status: todo
priority: high
type: feature
tags: [i18n, hosting]
created_by: agent
created_at: 2026-10-22T15:30:00Z
position: 25
---
## Notes
Créer `src/pages/en/hebergement-web.tsx`, miroir anglais de `hebergement-web.tsx`. Copie orientée clients internationaux : vocabulaire "Shared Hosting", mise en avant SSD NVMe, cPanel, SSL gratuit, uptime garanti. Conserver noms de forfaits (Starter/Business/Premium), traduire descriptions et specs. Ajouter `/hebergement-web` à `AVAILABLE_EN_PATHS` une fois prêt.

## Checklist
- [ ] Traduire la section de présentation et les arguments de performance
- [ ] Traduire les 3 forfaits (specs, prix affichés en devise locale conservée, libellés)
- [ ] Traduire la FAQ dédiée
- [ ] Ajouter `/hebergement-web` à `AVAILABLE_EN_PATHS`

## Acceptance
- `/en/hebergement-web` entièrement en anglais, cohérent avec le reste du site EN