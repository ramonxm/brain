---
title: "Docusaurus ignores files prefixed with _"
tags: [docusaurus]
---

Files and folders in `docs/` that start with `_` don't become pages: the docs plugin's default exclude pattern includes `**/_*.{js,jsx,ts,tsx,md,mdx}` and `**/_*/**`. That's how `docs/_inbox/` and `docs/_templates/` stay out of the site while remaining visible in Obsidian.

Related: [how notes are written in this repository](https://github.com/ramonxm/brain/blob/main/CONTRIBUTING.md).
