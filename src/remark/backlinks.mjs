// Remark plugin: appends a "Mentioned in" section listing the notes that link
// to the current one and that it does not already link back to.
//
// Registered with `beforeDefaultRemarkPlugins`, so Docusaurus still resolves the
// generated `.md` links and adds the heading to the table of contents.
//
// In `yarn start`, a page only picks up new backlinks when it is recompiled;
// restart the server (or save the page) after linking to it from another note.

import path from "node:path";
import { DEFAULT_LOCALE, LOCALE_ROOTS, buildGraph, locateFile, outgoingLinks } from "./notes.mjs";

const HEADINGS = { "pt-BR": "Mencionado em", en: "Mentioned in" };

const CACHE_MS = 2000;
const cache = new Map();

function graphFor(locale) {
  const cached = cache.get(locale);
  if (cached && Date.now() - cached.time < CACHE_MS) return cached.graph;
  // Drafts are left out of production builds, so linking to them would break the build.
  const graph = buildGraph(locale, { skipDrafts: process.env.NODE_ENV === "production" });
  cache.set(locale, { graph, time: Date.now() });
  return graph;
}

const text = (value) => ({ type: "text", value });

export default function remarkBacklinks() {
  return (tree, file) => {
    const located = file.path && locateFile(file.path);
    if (!located) return;

    // Untranslated docs are served from docs/ in every locale, so the file path
    // alone does not tell which locale is being built. `docusaurus start`
    // without `--locale` sets the variable to the string "undefined", so only
    // known locales are trusted.
    const envLocale = process.env.DOCUSAURUS_CURRENT_LOCALE;
    const locale = envLocale in LOCALE_ROOTS ? envLocale : located.locale ?? DEFAULT_LOCALE;
    const { notes, backlinks } = graphFor(locale);
    const current = notes.get(located.id);
    if (!current) return;

    const alreadyLinked = outgoingLinks(current);
    const sources = [...(backlinks.get(located.id) ?? [])]
      .filter((id) => !alreadyLinked.has(id))
      .sort((a, b) => notes.get(a).title.localeCompare(notes.get(b).title, locale));
    if (sources.length === 0) return;

    const dir = path.posix.dirname(located.id);
    const items = sources.map((id) => {
      const url = path.posix.relative(dir, id);
      return {
        type: "listItem",
        spread: false,
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: url.startsWith(".") ? url : `./${url}`,
                children: [text(notes.get(id).title)],
              },
            ],
          },
        ],
      };
    });

    tree.children.push(
      { type: "heading", depth: 2, children: [text(HEADINGS[locale] ?? HEADINGS.en)] },
      { type: "list", ordered: false, spread: false, children: items },
    );
  };
}
