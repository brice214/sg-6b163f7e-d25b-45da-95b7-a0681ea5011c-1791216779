---
title: Calculateur — Règles business avancées + email recommandation
status: todo
priority: high
type: feature
tags: [calculateur, business-logic, email]
created_by: agent
created_at: 2026-10-09T11:20:06Z
position: 16
---
## Notes
Calculateur à /calculateur (src/components/calculator/HostingCalculator.tsx + src/lib/calculator-logic.ts + src/lib/calculator-types.ts).

Règles business demandées par l'utilisateur :
1. Si "Application Web/SaaS" sélectionné → toujours recommander un forfait VPS, quel que soit le trafic ou les fonctionnalités cochées.
2. Si "Boutique E-Commerce" sélectionné → toujours recommander un forfait WordPress, même si la checkbox "WordPress (installation 1-clic)" n'est pas cochée.
3. La checkbox "WordPress (installation 1-clic)" à l'étape 3 ne doit jamais pouvoir être cochée si le type de projet n'est pas en rapport avec WordPress (pas de sens pour une Application Web/SaaS).
4. Champ "Email (optionnel) — Recevez votre recommandation par email" : si rempli, envoyer automatiquement la demande à info@spiderhoster.com via SMTP (infra partagée avec task-17).
5. Bouton "Commander maintenant" → doit rediriger vers l'URL de commande du forfait recommandé (déjà en place via getPlanDetails, à vérifier).
6. Nouveau bouton "En savoir plus" → doit rediriger vers la page produit correspondante (/hebergement-web, /hebergement-wordpress, /hebergement-vps) pour le forfait recommandé.

## Checklist
- [ ] Forcer un forfait VPS quand projectType === "webapp", indépendamment du trafic/features cochées
- [ ] Forcer un forfait WordPress quand projectType === "ecommerce", indépendamment de la checkbox features
- [ ] Désactiver/masquer la checkbox WordPress à l'étape 3 si le type de projet n'est pas compatible WordPress (webapp)
- [ ] Ajouter/vérifier le champ email optionnel à l'étape finale du formulaire avec le bon libellé
- [ ] Appeler l'API d'envoi d'email (task-17) automatiquement si un email est renseigné lors de l'affichage de la recommandation
- [ ] Ajouter le bouton "En savoir plus" redirigeant vers la page du forfait recommandé
- [ ] Vérifier que "Commander maintenant" redirige bien vers l'URL de commande exacte du forfait recommandé

## Acceptance
- "Application Web/SaaS" recommande toujours un VPS
- "Boutique E-Commerce" recommande toujours WordPress
- La checkbox WordPress est inaccessible pour un projet Application Web/SaaS
- Remplir l'email déclenche un envoi réel vers info@spiderhoster.com
- Les deux boutons de la recommandation pointent vers les bonnes URLs