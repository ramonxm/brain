<div align="center">
  <img src="static/img/android-chrome-192x192.png" width="80" alt="" />
  <h1>brain.xavier</h1>
  <p>Notas de estudo sobre algoritmos, estruturas de dados e fundamentos da computação.</p>
  <p>
    <a href="https://ramonxm.github.io/brain/"><strong>Acessar o site</strong></a> ·
    <a href="https://ramonxm.github.io/brain/en/">English version</a>
  </p>
  <p>
    <a href="https://github.com/ramonxm/brain/actions/workflows/deploy.yml"><img src="https://github.com/ramonxm/brain/actions/workflows/deploy.yml/badge.svg" alt="Build & Deploy" /></a>
    <img src="https://img.shields.io/badge/docusaurus-3.10-5b4bdb" alt="Docusaurus 3.10" />
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT" />
  </p>
</div>

## Sobre

Base de conhecimento pessoal, publicada como site de documentação, em **português** (idioma padrão) e **inglês**. Cada artigo traz explicação, implementação, análise de complexidade, quando usar (ou não) cada técnica e **perguntas de revisão** para se testar.

As notas funcionam como um Zettelkasten: cada uma trata de uma ideia, liga-se a outras, e cada página mostra automaticamente as notas que apontam para ela ("Mencionado em"). As notas de **padrão** (divisão e conquista, dois ponteiros, hash map como índice) conectam algoritmos e problemas que usam a mesma ideia.

| Seção                   | Conteúdo                                                                |
| :---------------------- | :---------------------------------------------------------------------- |
| **Conceitos**           | Big O, Stack e Heap, FIFO, LIFO, Swap, Threads, Serverless              |
| **Estruturas de Dados** | Array, Lista Ligada, Pilha, Fila, Árvore Binária                        |
| **Algoritmos**          | Ordenação, Busca Binária, BFS, Algoritmos Gulosos, Padrões, LeetCode e AtCoder |
| **Tópicos**             | AWS (Regiões, IAM, Policies) e Banco de Dados (DBMS, modelo relacional, SQL) |
| **TIL**                 | Registros curtos do que aprendi no dia                                  |

## Stack

- [Docusaurus 3](https://docusaurus.io/) com [Docusaurus Faster](https://docusaurus.io/blog/releases/3.6) (Rspack + SWC)
- React 19 e TypeScript
- Busca local offline com [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)
- Diagramas com Mermaid
- Backlinks gerados no build por um plugin remark próprio (`src/remark/backlinks.mjs`)
- Exportação das perguntas de revisão para o Anki (`scripts/anki.mjs`)
- Vault do Obsidian em `docs/`, compatível com os links do Docusaurus
- Deploy automático no GitHub Pages via GitHub Actions

## Desenvolvimento

Pré-requisitos: **Node.js 20+** (veja `.nvmrc`) e **Yarn 1**.

```bash
yarn            # instala as dependências
yarn start      # servidor local em pt-BR (http://localhost:3000/brain/)
yarn start:en   # servidor local em inglês
yarn build      # build de produção de todos os idiomas em ./build
yarn serve      # serve o build localmente (permite testar a troca de idioma)
yarn typecheck  # checagem de tipos
yarn new nota "Título"                         # nota rápida em docs/_inbox/
yarn new <tipo> <caminho-em-docs> "Título"     # nota a partir de um template
yarn anki       # exporta as perguntas de revisão para anki/
```

> O servidor de desenvolvimento roda **um idioma por vez**. Para testar a troca de idioma, use `yarn build && yarn serve`.

## Estrutura

```text
.
├── docs/                         # Conteúdo em pt-BR (idioma padrão) e vault do Obsidian
│   ├── _inbox/                   # Notas rápidas (não publicadas)
│   ├── _templates/               # Templates de nota (não publicados)
│   ├── concepts/
│   ├── data-structures/
│   ├── algorithms/
│   │   ├── sorting/  search/  graph/  greedy/  patterns/
│   │   └── contests/{leetcode,atcoder}/
│   └── topics/{aws,database}/
├── til/                          # Registros do TIL (blog)
├── i18n/en/
│   ├── code.json                 # Textos da interface e da homepage
│   ├── docusaurus-theme-classic/ # Navbar e footer
│   └── docusaurus-plugin-content-docs/
│       ├── current.json          # Nomes e descrições das categorias da sidebar
│       └── current/              # Tradução dos docs (espelha docs/, opcional)
├── scripts/                      # yarn new e yarn anki
├── src/
│   ├── css/custom.css            # Tema global
│   ├── pages/index.tsx           # Homepage
│   └── remark/                   # Plugin de backlinks e leitura do grafo de notas
├── static/img/                   # Imagens e ícones
├── docusaurus.config.ts
└── sidebars.ts                   # Uma sidebar por seção, gerada das pastas
```

## Adicionando um artigo

1. Crie a nota a partir de um template:

   ```bash
   yarn new algoritmo algorithms/sorting/insertion-sort "Insertion Sort"
   ```

   Tipos: `nota` (inbox), `conceito`, `estrutura`, `algoritmo`, `problema` e `padrao`.

2. Escreva o conteúdo, ligue a nota a pelo menos uma nota existente e preencha as perguntas de revisão.
3. Opcional: defina `sidebar_position` no frontmatter. A sidebar é gerada das pastas, sem registro manual.
4. Opcional: crie a tradução em `i18n/en/docusaurus-plugin-content-docs/current/<mesmo caminho>.md`. Sem ela, o site em inglês mostra a versão em português.
5. Se criou uma **pasta** nova, adicione um `_category_.json` com `key` estável e rode `yarn i18n:write-en` para gerar as chaves de tradução.
6. Rode `yarn build`: links quebrados fazem o build falhar.

O fluxo completo (inbox, rascunhos, Obsidian, Anki) e as convenções de escrita estão no [guia de escrita](CONTRIBUTING.md).

## Deploy

Todo push na `main` roda typecheck + build e publica na branch `gh-pages`. Pull requests rodam apenas o build. Para publicar manualmente:

```bash
yarn deploy-gh-pages
```

## Licença

[MIT](LICENSE) © Ramon Xavier
