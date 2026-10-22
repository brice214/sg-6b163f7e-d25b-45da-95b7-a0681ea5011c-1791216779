---
title: reCAPTCHA v2 formulaires
status: done
priority: high
type: feature
tags: [security, contact, calculateur]
created_by: agent
created_at: 2026-10-22T15:04:17Z
position: 22
---
## Notes
Ajout de Google reCAPTCHA v2 (case à cocher) sur le formulaire de contact (/contact) et sur l'étape finale du calculateur d'hébergement (/calculateur) pour bloquer les soumissions automatisées avant l'appel aux API internes (/api/contact et /api/send-recommendation). Vérification côté serveur via l'API Google siteverify (src/lib/recaptcha.ts). Nécessite NEXT_PUBLIC_RECAPTCHA_SITE_KEY et RECAPTCHA_SECRET_KEY dans les variables d'environnement.

## Checklist
- [x] Créer le composant réutilisable Recaptcha (src/components/shared/Recaptcha.tsx) chargeant le script Google et exposant reset()
- [x] Créer l'utilitaire serveur de vérification (src/lib/recaptcha.ts)
- [x] Intégrer le widget sur le formulaire de contact + bloquer l'envoi sans validation + vérifier côté serveur
- [x] Intégrer le widget sur l'étape finale du calculateur (envoi email optionnel) + vérifier côté serveur
- [x] Ajouter les variables d'environnement placeholder dans .env.local

## Acceptance
Le formulaire de contact refuse l'envoi tant que la case reCAPTCHA n'est pas cochée. Le calculateur exige la validation du captcha avant d'envoyer la recommandation par email. Les deux API rejettent les requêtes sans token valide.