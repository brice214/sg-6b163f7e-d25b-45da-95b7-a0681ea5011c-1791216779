---
title: Pages légales (Confidentialité & CGU)
status: in_progress
priority: high
type: feature
tags: [legal, footer]
created_by: agent
created_at: 2026-10-15T17:04:00Z
position: 18
---

## Notes
Création des pages Politique de Confidentialité et CGU pour spiderhoster.com, basées sur le fonctionnement réel de la plateforme (aucune base de données sur le site vitrine, formulaires envoyés par SMTP, commandes/paiements traités sur le portail client externe portail.spiderhoster.com) et sur la fiche légale ANPI-Gabon fournie par l'utilisateur :
- Dénomination : Spiderhoster Ltd (Entreprise Individuelle)
- RCCM : GA-LBV-01-2021-A10-02662
- NIF : 181208 V
- Représentant légal : Brice Emery MBENDJE
- Siège social légal (enregistrement ANPI) : Nzeng-Ayong, Libreville, BP 20142
- Bureaux (adresse de contact publique) : Immeuble ASCOMA, 7ème étage, Centre-ville, Libreville
- Politique de remboursement : aucun remboursement, paiement définitif (confirmé par l'utilisateur)
- Droit applicable : droit gabonais, tribunaux de Libreville (par défaut, cohérent avec le siège)

CGU section 7 "Suspension, rétention et suppression des services" ajoutée avec les règles réelles :
- Hébergement/WordPress : suspendu puis supprimé définitivement après 1 mois
- VPS : supprimé après 7 jours de non-renouvellement
- Domaines : 1 mois de grâce (tarif normal) puis période de rédemption 70-120 jours (100 000 FCFA), puis libération
- Emails professionnels : 10 Go par compte, extensible sur demande

Correction en parallèle de l'incohérence d'adresse détectée entre Footer ("Quartier Louis"), Contact et Schema.org ("Quartier Glass") — remplacée partout par l'adresse des bureaux ASCOMA.

## Checklist
- [x] Créer LegalPageLayout.tsx (composant réutilisable : hero + sommaire sticky + sections)
- [x] Créer politique-confidentialite.tsx (responsable du traitement, données collectées, finalités, cookies, droits, portail client, etc.)
- [x] Créer cgu.tsx (mentions légales, commande/paiement, remboursement, rétention/suppression, responsabilité, droit applicable, etc.)
- [x] Ajouter liens vers les deux pages dans le Footer
- [x] Corriger l'adresse dans Footer, Contact et Schema.org (_document.tsx)
- [x] Ajouter les deux pages au sitemap.xml
- [ ] Vérifier l'absence d'erreurs (check_for_errors)

## Acceptance
- Les pages /politique-confidentialite et /cgu sont accessibles, cohérentes avec le design du site, et affichent les informations légales réelles de SPIDERHOSTER.
- Le footer du site contient des liens fonctionnels vers ces deux pages.
- L'adresse affichée est cohérente sur tout le site (Footer, Contact, Schema.org).