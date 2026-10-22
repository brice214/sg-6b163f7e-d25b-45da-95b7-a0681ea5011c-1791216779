---
title: SEO bilingue avancé (sitemap, robots)
status: todo
priority: medium
type: chore
tags: [i18n, seo]
created_by: agent
created_at: 2026-10-22T15:30:00Z
position: 34
---
## Notes
Une fois la majorité des pages EN publiées (tasks 24-33), étendre `src/pages/sitemap.xml.tsx` pour inclure les URLs `/en/...` avec balises `xhtml:link` hreflang alternate, et vérifier `public/robots.txt` autorise bien le crawl de `/en/`. Dépend des tâches de traduction précédentes.

## Checklist
- [ ] Étendre sitemap.xml avec les URLs EN + hreflang alternates
- [ ] Vérifier robots.txt
- [ ] Vérifier Schema.org (balise inLanguage) sur les pages EN

## Acceptance
- Sitemap expose toutes les URLs FR et EN avec relations hreflang correctes