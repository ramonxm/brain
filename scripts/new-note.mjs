#!/usr/bin/env node
// Creates a note from a template in docs/_templates/.
//
//   yarn new nota "Título"                       -> docs/_inbox/titulo.md
//   yarn new conceito concepts/hash-table "Tabela Hash"
//   yarn new algoritmo algorithms/sorting/insertion-sort "Insertion Sort"
//   yarn new problema algorithms/contests/leetcode/valid-parentheses "Valid Parentheses"
//   yarn new padrao algorithms/patterns/sliding-window "Janela Deslizante"

import fs from "node:fs";
import path from "node:path";
import { ROOT } from "../src/remark/notes.mjs";

const TEMPLATES = {
  nota: "nota-rapida",
  conceito: "conceito",
  estrutura: "conceito",
  algoritmo: "algoritmo",
  problema: "problema",
  padrao: "padrao",
};

const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function usage(message) {
  if (message) console.error(`Erro: ${message}\n`);
  console.error(
    [
      "Uso:",
      '  yarn new nota "Título"',
      '  yarn new <tipo> <caminho-em-docs> "Título"',
      "",
      `Tipos: ${Object.keys(TEMPLATES).join(", ")}`,
    ].join("\n"),
  );
  process.exit(1);
}

const [type, ...rest] = process.argv.slice(2);
if (!type || !TEMPLATES[type]) usage(type && `tipo desconhecido: ${type}`);

let target;
let title;
if (type === "nota") {
  title = rest.join(" ").trim();
  if (!title) usage("informe o título");
  target = `_inbox/${slugify(title)}`;
} else {
  [target, title] = [rest[0], rest.slice(1).join(" ").trim()];
  if (!target || !title) usage("informe o caminho e o título");
}

const file = path.join(ROOT, "docs", target.replace(/\.mdx?$/, "") + ".md");
if (fs.existsSync(file)) usage(`${path.relative(ROOT, file)} já existe`);

const template = fs.readFileSync(path.join(ROOT, "docs/_templates", `${TEMPLATES[type]}.md`), "utf8");
const today = new Date().toISOString().slice(0, 10);
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, template.replaceAll("{{title}}", title).replaceAll("{{date}}", today));

console.log(`Criado: ${path.relative(ROOT, file)}`);
if (type !== "nota") {
  console.log("Lembre de ligar a nota a pelo menos uma nota existente e de preencher as perguntas de revisão.");
}
