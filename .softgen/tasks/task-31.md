---
title: Traduction Contact (EN)
status: todo
priority: medium
type: feature
tags: [i18n, contact]
created_by: agent
created_at: 2026-10-22T15:30:00Z
position: 31
---
## Notes
Créer `src/pages/en/contact.tsx`, miroir anglais de `contact.tsx` (formulaire + reCAPTCHA + coordonnées). Traduire les labels de formulaire, messages de validation et textes de confirmation/erreur. Vérifier que l'API `src/pages/api/contact.ts` peut recevoir un champ de langue pour adapter l'email de notification (optionnel). Ajouter `/contact` à `AVAILABLE_EN_PATHS` une fois prêt.

## Checklist
- [ ] Traduire les labels et placeholders du formulaire
- [ ] Traduire les messages de succès/erreur et validations
- [ ] Traduire le bloc coordonnées
- [ ] Ajouter `/contact` à `AVAILABLE_EN_PATHS`

## Acceptance
- `/en/contact` entièrement en anglais, formulaire fonctionnel