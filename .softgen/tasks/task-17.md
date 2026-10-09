---
title: Contact — Intégration SMTP réelle
status: todo
priority: urgent
type: feature
tags: [contact, smtp, email, backend]
created_by: agent
created_at: 2026-10-09T11:20:06Z
position: 17
---
## Notes
Page src/pages/contact.tsx. Le formulaire doit envoyer un vrai email à info@spiderhoster.com via SMTP serveur (compatible serverless Next.js).

Configuration SMTP fournie par l'utilisateur (à stocker en variables d'environnement, jamais en dur dans le code) :
- Hôte : smtp.stackmail.com
- Utilisateur : info@spiderhoster.com
- Mot de passe : fourni par l'utilisateur, stocké dans SMTP_PASSWORD
- Destinataire des messages : info@spiderhoster.com

Infrastructure email partagée avec le calculateur (task-16) via un module utilitaire commun.

## Checklist
- [ ] Installer nodemailer (+ types) si absent du package.json
- [ ] Créer src/lib/email.ts avec un transporter SMTP basé sur variables d'environnement (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD)
- [ ] Ajouter les variables d'environnement nécessaires dans .env.local
- [ ] Créer src/pages/api/contact.ts qui reçoit les données du formulaire et envoie l'email à info@spiderhoster.com
- [ ] Connecter le formulaire contact.tsx à cette API avec gestion des états loading/success/error
- [ ] Créer src/pages/api/send-recommendation.ts pour l'envoi de recommandation depuis le calculateur (task-16)

## Acceptance
- Envoyer le formulaire de contact déclenche un email réel reçu sur info@spiderhoster.com
- Les erreurs réseau/SMTP affichent un message clair à l'utilisateur
- Aucun mot de passe SMTP en dur dans le code source