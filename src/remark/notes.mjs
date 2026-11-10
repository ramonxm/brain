// Reads the notes in docs/ (and their translations) as a link graph.
// Shared by the backlinks remark plugin and the Anki export script.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export const DEFAULT_LOCALE = "pt-BR";

export const LOCALE_ROOTS = {
  "pt-BR": path.join(ROOT, "docs"),
  en: path.join(ROOT, "i18n/en/docusaurus-plugin-content-docs/current"),
};

const isIgnored = (name) => name.startsWith("_") || name.startsWith(".");

/** Ids (posix paths relative to docs/) of every note, ignoring `_*` and `.*`. */
export function listNoteIds(dir = LOCALE_ROOTS[DEFAULT_LOCALE], prefix = "") {
  const ids = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (isIgnored(entry.name)) continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      ids.push(...listNoteIds(path.join(dir, entry.name), rel));
    } else if (/\.mdx?$/.test(entry.name)) {
      ids.push(rel);
    }
  }
  return ids.sort();
}

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(match[0].length) };
}

/** A note in the given locale, falling back to the default locale when untranslated. */
export function readNote(locale, id) {
  const own = path.join(LOCALE_ROOTS[locale] ?? LOCALE_ROOTS[DEFAULT_LOCALE], id);
  const file = fs.existsSync(own) ? own : path.join(LOCALE_ROOTS[DEFAULT_LOCALE], id);
  const raw = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontMatter(raw);
  const title = body.match(/^#\s+(.+)$/m)?.[1].trim() ?? data.sidebar_label ?? id;
  return { id, file, body, frontMatter: data, title, draft: data.draft === "true" };
}

/** Section overview pages (`concepts/index.md`...) link to everything, so they are not backlink sources. */
export const isOverview = (id) => /^[^/]+\/index\.mdx?$/.test(id);

/** Markdown without fenced and inline code, so links in code samples are ignored. */
export const stripCode = (md) =>
  md.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, "").replace(/`[^`\n]*`/g, "");

/** Ids of the notes this note links to (relative `.md` links only). */
export function outgoingLinks(note) {
  const targets = new Set();
  const re = /\]\(([^)\s]+?\.mdx?)(?:#[^)\s]*)?\)/g;
  for (const [, target] of stripCode(note.body).matchAll(re)) {
    if (/^[a-z]+:/i.test(target) || target.startsWith("/")) continue;
    targets.add(path.posix.normalize(path.posix.join(path.posix.dirname(note.id), decodeURI(target))));
  }
  return targets;
}

/** Locale and note id of a file under docs/ or its translation folder. */
export function locateFile(file) {
  for (const [locale, root] of Object.entries(LOCALE_ROOTS)) {
    const rel = path.relative(root, file);
    if (!rel.startsWith("..") && !path.isAbsolute(rel)) {
      return { locale, id: rel.split(path.sep).join("/") };
    }
  }
  return undefined;
}

/** All notes of a locale plus, for each note, the notes that link to it. */
export function buildGraph(locale, { skipDrafts = false } = {}) {
  const notes = new Map(listNoteIds().map((id) => [id, readNote(locale, id)]));
  const backlinks = new Map();
  for (const [id, note] of notes) {
    if (isOverview(id) || (skipDrafts && note.draft)) continue;
    for (const target of outgoingLinks(note)) {
      if (target === id || !notes.has(target)) continue;
      if (!backlinks.has(target)) backlinks.set(target, new Set());
      backlinks.get(target).add(id);
    }
  }
  return { notes, backlinks };
}
