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

Base de conhecimento pessoal, publicada como site de documentação, em **português** (idioma padrão) e **inglês**. Cada artigo traz explicação, implementação, análise de complexidade e quando usar (ou não) cada técnica.

| Seção                   | Conteúdo                                                                |
| :---------------------- | :---------------------------------------------------------------------- |
| **Conceitos**           | Big O, Stack e Heap, FIFO, LIFO, Swap, Threads, Serverless              |
| **Estruturas de Dados** | Array, Lista Ligada, Pilha, Fila, Árvore Binária                        |
| **Algoritmos**          | Ordenação, Busca Binária, BFS, Algoritmos Gulosos, LeetCode e AtCoder   |
| **Tópicos**             | AWS (Regiões, IAM, Policies) e Banco de Dados (DBMS, modelo relacional, SQL) |

## Stack

- [Docusaurus 3](https://docusaurus.io/) com [Docusaurus Faster](https://docusaurus.io/blog/releases/3.6) (Rspack + SWC)
- React 19 e TypeScript
- Busca local offline com [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)
- Diagramas com Mermaid
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
```

> O servidor de desenvolvimento roda **um idioma por vez**. Para testar a troca de idioma, use `yarn build && yarn serve`.

## Estrutura

```text
.
├── docs/                         # Conteúdo em pt-BR (idioma padrão)
│   ├── concepts/
│   ├── data-structures/
│   ├── algorithms/
│   │   ├── sorting/  search/  graph/  greedy/
│   │   └── contests/{leetcode,atcoder}/
│   └── topics/{aws,database}/
├── i18n/en/
│   ├── code.json                 # Textos da interface e da homepage
│   ├── docusaurus-theme-classic/ # Navbar e footer
│   └── docusaurus-plugin-content-docs/
│       ├── current.json          # Nomes e descrições das categorias da sidebar
│       └── current/              # Tradução dos docs (espelha docs/)
├── src/
│   ├── css/custom.css            # Tema global
│   └── pages/index.tsx           # Homepage
├── static/img/                   # Imagens e ícones
├── docusaurus.config.ts
└── sidebars.ts                   # Uma sidebar por seção da navbar
```

## Adicionando um artigo

1. Crie o arquivo em `docs/<seção>/<slug>.md` com o frontmatter:

   ```md
   ---
   sidebar_label: "Nome curto"
   description: "Uma frase que resume o artigo (usada em SEO e nos cards)."
   ---

   # Título completo
   ```

2. Adicione o id do doc (`<seção>/<slug>`) à categoria correspondente em `sidebars.ts`.
3. Crie a tradução em `i18n/en/docusaurus-plugin-content-docs/current/<seção>/<slug>.md`, com o mesmo caminho.
4. Se criou uma **categoria** nova, defina um `key` estável e rode `yarn i18n:write-en` para gerar as chaves de tradução em `current.json`.
5. Rode `yarn build` — links quebrados fazem o build falhar.

### Convenções

- Um `#` por página; seções com `##` e `###`, sem emojis nos títulos.
- Use admonitions para destaques, com título entre colchetes: `:::tip[Título]`, `:::warning[Título]`.
- Sempre informe a complexidade de tempo e espaço.
- Links internos com caminho relativo para o arquivo (`../concepts/big-o-notation.md`).

## Deploy

Todo push na `main` roda typecheck + build e publica na branch `gh-pages`. Pull requests rodam apenas o build. Para publicar manualmente:

```bash
yarn deploy-gh-pages
```

## Licença

[MIT](LICENSE) © Ramon Xavier
