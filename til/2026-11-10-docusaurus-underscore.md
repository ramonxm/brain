---
title: "Docusaurus ignora arquivos com prefixo _"
tags: [docusaurus]
---

Arquivos e pastas de `docs/` que começam com `_` não viram páginas: o padrão de exclusão do plugin de docs inclui `**/_*.{js,jsx,ts,tsx,md,mdx}` e `**/_*/**`. É assim que `docs/_inbox/` e `docs/_templates/` ficam fora do site, mas continuam visíveis no Obsidian.

Relacionado: [como escrever notas neste repositório](https://github.com/ramonxm/brain/blob/main/CONTRIBUTING.md).
