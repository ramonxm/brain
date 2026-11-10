#!/usr/bin/env node
// Checks notes against the writing guide (CONTRIBUTING.md).
//
//   yarn check:notes                 # every note, both locales
//   yarn check:notes docs/x/y.md     # only these files
//   node scripts/check-notes.mjs --hook   # Claude Code PostToolUse hook (reads the tool call on stdin)
//
// Exit code: 0 when everything passes, 1 with errors (2 in --hook mode, which
// sends the errors back to the agent so it fixes the file).

import fs from "node:fs";
import path from "node:path";
import { DEFAULT_LOCALE, LOCALE_ROOTS, ROOT, isOverview, listNoteIds, locateFile, outgoingLinks, readNote, stripCode } from "../src/remark/notes.mjs";

// Template sections: canonical key -> heading per locale.
const SECTIONS = {
  "how-it-works": { "pt-BR": "Como funciona", en: "How it works" },
  complexity: { "pt-BR": "Complexidade", en: "Complexity" },
  implementation: { "pt-BR": "Implementação", en: "Implementation" },
  "usage-example": { "pt-BR": "Exemplo de uso", en: "Usage example" },
  applications: { "pt-BR": "Aplicações", en: "Applications" },
  "pros-and-cons": { "pt-BR": "Vantagens e desvantagens", en: "Pros and cons" },
  "when-to-use": { "pt-BR": "Quando usar", en: "When to use" },
  "best-practices": { "pt-BR": "Boas práticas", en: "Best practices" },
  comparison: { "pt-BR": "Comparativo", en: "Comparison" },
  "how-to-spot-it": { "pt-BR": "Como reconhecer", en: "How to spot it" },
  "where-it-shows-up": { "pt-BR": "Onde aparece", en: "Where it shows up" },
  problem: { "pt-BR": "Problema", en: "Problem" },
  "key-insight": { "pt-BR": "Insight-chave", en: "Key insight" },
  solution: { "pt-BR": "Solução", en: "Solution" },
  explanation: { "pt-BR": "Explicação", en: "Explanation" },
  "test-cases": { "pt-BR": "Casos de teste", en: "Test cases" },
  "spot-the-pattern": { "pt-BR": "Como reconhecer o padrão", en: "How to spot the pattern" },
  review: { "pt-BR": "Perguntas de revisão", en: "Review questions" },
  related: { "pt-BR": "Relacionados", en: "Related" },
  "mentioned-in": { "pt-BR": "Mencionado em", en: "Mentioned in" },
};

// Order of the known sections per note type. Unknown (subject-specific) sections may appear anywhere.
const ORDER = {
  general: ["how-it-works", "complexity", "implementation", "usage-example", "applications", "pros-and-cons", "when-to-use", "best-practices", "review", "related"],
  pattern: ["how-it-works", "how-to-spot-it", "where-it-shows-up", "comparison", "review", "related"],
  problem: ["problem", "key-insight", "solution", "explanation", "complexity", "test-cases", "spot-the-pattern", "related"],
  contestProblem: ["problem", "key-insight", "solution", "explanation", "complexity"],
  contest: ["spot-the-pattern", "related"],
};

const REQUIRED = {
  general: ["review", "related"],
  pattern: ["how-to-spot-it", "where-it-shows-up", "review", "related"],
  problem: ["problem", "key-insight", "solution", "complexity", "spot-the-pattern", "related"],
  contestProblem: ["problem", "key-insight", "solution", "complexity"],
  contest: ["spot-the-pattern", "related"],
};

const SIDEBAR_IDS = {
  concepts: "conceptsSidebar",
  "data-structures": "dataStructuresSidebar",
  algorithms: "algorithmsSidebar",
  topics: "topicsSidebar",
};

const keyOf = (locale, title) =>
  Object.entries(SECTIONS).find(([, names]) => names[locale] === title)?.[0];

const label = (locale, key) => `"## ${SECTIONS[key][locale]}"`;

function headingsOf(body) {
  const out = [];
  for (const line of stripCode(body).split(/\r?\n/)) {
    const m = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (m) out.push({ level: m[1].length, title: m[2] });
  }
  return out;
}

function noteType(id, headings) {
  if (isOverview(id)) return "overview";
  if (id.startsWith("algorithms/patterns/")) return "pattern";
  if (id.startsWith("algorithms/contests/")) {
    return headings.some((h) => h.level === 2 && /^[A-Z]\d? - /.test(h.title)) ? "contest" : "problem";
  }
  return "general";
}

function checkOrder(errors, locale, keys, type, where = "") {
  const order = ORDER[type];
  let last = -1;
  let lastKey;
  for (const key of keys) {
    const index = order.indexOf(key);
    if (index === -1) continue;
    if (index < last) {
      errors.push(`${where}${label(locale, key)} deve vir antes de ${label(locale, lastKey)}`);
    }
    if (index > last) [last, lastKey] = [index, key];
  }
  for (const key of REQUIRED[type]) {
    if (!keys.includes(key)) errors.push(`${where}falta a seção ${label(locale, key)}`);
  }
}

function checkReviewQuestions(errors, locale, body) {
  const heading = SECTIONS.review[locale];
  const start = body.indexOf(`\n## ${heading}\n`);
  if (start === -1) return;
  const rest = body.slice(start + heading.length + 5);
  const section = rest.split(/\n## /)[0];
  const questions = [...section.matchAll(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)];
  if (questions.length === 0) {
    errors.push(`"${heading}" precisa de pelo menos uma pergunta no formato <details><summary>Pergunta?</summary> ... </details>`);
  }
  for (const [, question, answer] of questions) {
    if (!question.trim()) errors.push(`pergunta de revisão vazia em "${heading}"`);
    if (!answer.trim()) errors.push(`a pergunta "${question.trim()}" está sem resposta`);
  }
}

function checkCodeFences(errors, body) {
  let open = null;
  body.split(/\r?\n/).forEach((line, i) => {
    const m = line.match(/^(`{3,}|~{3,})(.*)$/);
    if (!m) return;
    if (open) {
      if (m[1].startsWith(open) && !m[2].trim()) open = null;
      return;
    }
    open = m[1];
    if (!m[2].trim()) errors.push(`bloco de código sem linguagem na linha ${i + 1} do corpo (use \`\`\`python, \`\`\`ts...)`);
  });
}

function checkLinks(errors, note, locale) {
  for (const target of outgoingLinks(note)) {
    const own = path.join(LOCALE_ROOTS[locale], target);
    const fallback = path.join(LOCALE_ROOTS[DEFAULT_LOCALE], target);
    if (!fs.existsSync(own) && !fs.existsSync(fallback)) {
      errors.push(`link quebrado: ${target} não existe`);
    }
  }
}

function checkCategories(errors, id) {
  const parts = id.split("/");
  const section = parts[0];
  // Every folder below the section folder needs a _category_.json with a stable key.
  for (let depth = 2; depth < parts.length; depth++) {
    const dir = parts.slice(0, depth).join("/");
    const file = path.join(LOCALE_ROOTS[DEFAULT_LOCALE], dir, "_category_.json");
    if (!fs.existsSync(file)) {
      errors.push(`a pasta docs/${dir}/ precisa de um _category_.json com "key" e "label" (veja docs/algorithms/sorting/_category_.json)`);
      continue;
    }
    errors.push(...checkCategoryFile(file, section));
  }
}

function checkCategoryFile(file, section) {
  const errors = [];
  const rel = path.relative(ROOT, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return [`${rel}: JSON inválido (${error.message})`];
  }
  if (!data.key) errors.push(`${rel}: falta "key" (estável, usado nas traduções)`);
  if (data.label && data.key) {
    const translations = path.join(ROOT, "i18n/en/docusaurus-plugin-content-docs/current.json");
    const keys = JSON.parse(fs.readFileSync(translations, "utf8"));
    const translationKey = `sidebar.${SIDEBAR_IDS[section]}.category.${data.key}`;
    if (!keys[translationKey]) {
      errors.push(`${rel}: falta a tradução "${translationKey}" em i18n/en/docusaurus-plugin-content-docs/current.json (rode yarn i18n:write-en e traduza a mensagem)`);
    } else if (keys[translationKey].message === data.label && /[^\x00-\x7F]/.test(data.label)) {
      // Same text as the Portuguese label and with accents: most likely untranslated.
      errors.push(`${rel}: a tradução "${translationKey}" ainda está em português ("${data.label}")`);
    }
  }
  return errors;
}

function checkTranslationParity(errors, id, locale, headings, frontMatter) {
  const other = locale === DEFAULT_LOCALE ? "en" : DEFAULT_LOCALE;
  const otherFile = path.join(LOCALE_ROOTS[other], id);
  if (!fs.existsSync(otherFile)) return;
  const otherNote = readNote(other, id);
  const otherHeadings = headingsOf(otherNote.body).filter((h) => h.level === 2);
  const mine = headings.filter((h) => h.level === 2);
  const shape = (list, loc) => list.map((h) => keyOf(loc, h.title) ?? "?");
  const a = shape(mine, locale).join(" | ");
  const b = shape(otherHeadings, other).join(" | ");
  if (mine.length !== otherHeadings.length || a !== b) {
    errors.push(
      `as seções não batem com a outra versão (${path.relative(ROOT, otherFile)}): as duas devem ter as mesmas seções, na mesma ordem`,
    );
  }
  if ((frontMatter.sidebar_position ?? "") !== (otherNote.frontMatter.sidebar_position ?? "")) {
    errors.push(`sidebar_position diferente da outra versão (${path.relative(ROOT, otherFile)})`);
  }
}

/** Errors for one note (file inside docs/ or the English translation folder). */
export function checkNote(file) {
  const located = locateFile(file);
  if (!located) return [];
  const { locale, id } = located;
  const note = readNote(locale, id);
  if (note.file !== file) return []; // not translated: nothing to check in this locale
  const errors = [];
  const fm = note.frontMatter;

  if (!fm.sidebar_label) errors.push('frontmatter sem "sidebar_label"');
  if (!fm.description) errors.push('frontmatter sem "description" (uma frase que resume a nota)');
  if (fm.sidebar_position && !/^\d+$/.test(fm.sidebar_position)) errors.push('"sidebar_position" deve ser um número inteiro');

  const headings = headingsOf(note.body);
  const h1 = headings.filter((h) => h.level === 1);
  if (h1.length !== 1) errors.push(`a nota deve ter exatamente um título "#" (tem ${h1.length})`);
  else if (headings[0].level !== 1) errors.push('o título "#" deve vir antes de qualquer seção');
  else if (stripCode(note.body).split(/^#\s/m)[0].replace(/^import .*$/gm, "").trim()) {
    errors.push('há texto antes do título "#": a nota começa pelo título, seguido do parágrafo de abertura');
  }

  for (const h of headings.filter((h) => h.level >= 2)) {
    if (/[.:;!?]$/.test(h.title)) errors.push(`título "${h.title}" termina com pontuação`);
    if (/^\d+[.)]\s/.test(h.title)) errors.push(`título "${h.title}" não deve ser numerado`);
    if (/\p{Extended_Pictographic}/u.test(h.title)) errors.push(`título "${h.title}" não deve ter emoji`);
  }

  checkCodeFences(errors, note.body);
  checkLinks(errors, note, locale);
  checkCategories(errors, id);

  const type = noteType(id, headings);
  const h2 = headings.filter((h) => h.level === 2);
  if (h2.some((h) => keyOf(locale, h.title) === "mentioned-in")) {
    errors.push(`"${SECTIONS["mentioned-in"][locale]}" é gerada no build; apague a seção escrita à mão`);
  }

  if (type !== "overview" && !note.draft) {
    if (outgoingLinks(note).size === 0) {
      errors.push("a nota não aponta para nenhuma outra nota: ligue-a a pelo menos uma (em geral, em Relacionados)");
    }
    if (type === "contest") {
      // One "## A - Name" block per problem, with the problem sections as "###".
      let current = null;
      const blocks = [];
      const pageKeys = [];
      for (const h of headings) {
        if (h.level === 2) {
          current = /^[A-Z]\d? - /.test(h.title) ? { title: h.title, keys: [] } : null;
          if (current) blocks.push(current);
          else pageKeys.push(keyOf(locale, h.title));
        } else if (h.level === 3 && current) {
          current.keys.push(keyOf(locale, h.title));
        }
      }
      for (const block of blocks) {
        const sub = [];
        checkOrder(sub, locale, block.keys, "contestProblem", `${block.title}: `);
        errors.push(...sub.map((e) => e.replaceAll('"## ', '"### ')));
      }
      checkOrder(errors, locale, pageKeys.filter(Boolean), "contest");
    } else {
      checkOrder(errors, locale, h2.map((h) => keyOf(locale, h.title)).filter(Boolean), type);
      if (type !== "problem") checkReviewQuestions(errors, locale, note.body);
    }
  }

  checkTranslationParity(errors, id, locale, headings, fm);
  return errors;
}

/** Whether a path is something this checker validates. */
function isCheckable(file) {
  if (path.basename(file) === "_category_.json") return Boolean(locateFile(file));
  if (!/\.mdx?$/.test(file)) return false;
  const located = locateFile(file);
  if (!located) return false;
  return !located.id.split("/").some((part) => part.startsWith("_") || part.startsWith("."));
}

function check(file) {
  if (path.basename(file) === "_category_.json") {
    const { id } = locateFile(file);
    return checkCategoryFile(file, id.split("/")[0]);
  }
  return checkNote(file);
}

function report(results) {
  return results
    .filter(({ errors }) => errors.length)
    .map(({ file, errors }) => `${path.relative(ROOT, file)}\n${errors.map((e) => `  - ${e}`).join("\n")}`)
    .join("\n\n");
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] === "--hook") {
    let input = "";
    for await (const chunk of process.stdin) input += chunk;
    const payload = JSON.parse(input || "{}");
    const file = payload.tool_input?.file_path ?? payload.tool_response?.filePath;
    if (!file || !fs.existsSync(file) || !isCheckable(path.resolve(file))) return;
    const errors = check(path.resolve(file));
    if (errors.length === 0) return;
    process.stderr.write(
      `A nota não segue o template do repositório (CONTRIBUTING.md). Corrija:\n\n${report([{ file: path.resolve(file), errors }])}\n`,
    );
    process.exit(2);
  }

  const files = args.length
    ? args.map((f) => path.resolve(f)).filter(isCheckable)
    : Object.keys(LOCALE_ROOTS).flatMap((locale) =>
        listNoteIds(LOCALE_ROOTS[locale]).map((id) => path.join(LOCALE_ROOTS[locale], id)),
      );
  const results = files.map((file) => ({ file, errors: check(file) }));
  const failed = results.filter((r) => r.errors.length);
  if (failed.length) {
    console.error(report(results));
    console.error(`\n${failed.length} de ${results.length} notas com problemas.`);
    process.exit(1);
  }
  console.log(`${results.length} notas ok.`);
}

main();
