#!/usr/bin/env node
// Exports flashcards from the notes into Anki-importable text files:
//
//   - every <details> question under "Perguntas de revisão" / "Review questions"
//   - every "Insight-chave" / "Key insight" section of a problem
//
// Output: anki/brain-<locale>.txt (one file per locale). In Anki, use
// File > Import. Each card has a stable id (guid), so re-importing the file
// updates existing cards instead of duplicating them.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { LOCALE_ROOTS, ROOT, listNoteIds, readNote } from "../src/remark/notes.mjs";

const SECTIONS = {
  "pt-BR": { review: "Perguntas de revisão", insight: "Insight-chave", ask: "Qual é o insight-chave?" },
  en: { review: "Review questions", insight: "Key insight", ask: "What is the key insight?" },
};

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Just enough Markdown for card text: code, bold, italics, links and line breaks. */
function toHtml(markdown) {
  return escapeHtml(markdown.trim())
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/\*([^*]+)\*/g, "<i>$1</i>")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\r?\n/g, "<br>");
}

const field = (s) => s.replace(/\t/g, " ");

/** Splits a note body into sections by heading: [{ level, title, content, parent }]. */
function sections(body) {
  const out = [];
  let parent = null;
  let current = null;
  for (const line of body.split(/\r?\n/)) {
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      if (level === 2) parent = heading[2].trim();
      current = { level, title: heading[2].trim(), content: "", parent: level === 3 ? parent : null };
      out.push(current);
    } else if (current) {
      current.content += `${line}\n`;
    }
  }
  return out;
}

function cardsFor(locale, note) {
  const names = SECTIONS[locale];
  const cards = [];
  const tag = note.id.replace(/\.mdx?$/, "").replace(/\//g, "::");
  for (const section of sections(note.body)) {
    if (section.level === 2 && section.title === names.review) {
      const re = /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g;
      for (const [, question, answer] of section.content.matchAll(re)) {
        cards.push({ front: `${note.title}: ${question.trim()}`, back: answer, tag });
      }
    }
    if (section.title === names.insight) {
      const where = section.parent ? `${note.title} · ${section.parent}` : note.title;
      cards.push({ front: `${where}: ${names.ask}`, back: section.content, tag });
    }
  }
  return cards;
}

fs.mkdirSync(path.join(ROOT, "anki"), { recursive: true });

for (const locale of Object.keys(LOCALE_ROOTS)) {
  const lines = [
    "#separator:tab",
    "#html:true",
    "#notetype:Basic",
    `#deck:brain::${locale}`,
    "#tags column:3",
    "#guid column:4",
  ];
  let count = 0;
  for (const id of listNoteIds()) {
    const note = readNote(locale, id);
    if (note.draft) continue;
    for (const card of cardsFor(locale, note)) {
      const guid = crypto.createHash("sha1").update(`${locale}:${id}:${card.front}`).digest("hex").slice(0, 16);
      lines.push([toHtml(card.front), toHtml(card.back), card.tag, guid].map(field).join("\t"));
      count++;
    }
  }
  const out = path.join(ROOT, "anki", `brain-${locale}.txt`);
  fs.writeFileSync(out, `${lines.join("\n")}\n`);
  console.log(`${count} cards -> ${path.relative(ROOT, out)}`);
}

