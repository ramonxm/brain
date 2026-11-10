---
name: notas
description: Cria ou adapta notas deste repositório ao template. Use ao criar uma página, nota ou seção (pasta/categoria) em docs/, ao reestruturar uma nota existente que fuja do padrão, ao transformar texto colado ou rascunho da inbox em nota, ou ao traduzir uma nota para i18n/en.
---

# Notas no template

O guia de escrita é `CONTRIBUTING.md`: ele é a fonte das regras (seções e ordem por tipo, formatos, perguntas de revisão, links). Os templates ficam em `docs/_templates/`. O validador `scripts/check-notes.mjs` aplica as regras e roda sozinho depois de cada Write/Edit numa nota (hook em `.claude/settings.json`); quando ele devolver erros, corrija todos antes de seguir.

## Passos

1. **Classifique** a nota: conceito/estrutura, algoritmo, problema, padrão, tópico ou nota rápida (inbox). Leia a seção do tipo no `CONTRIBUTING.md` e o template correspondente.
2. **Procure duplicatas**: `grep -ril "<termo>" docs i18n/en/docusaurus-plugin-content-docs/current`. Uma ideia por nota: se a ideia já existe, complemente a nota existente ou aponte para ela em vez de repetir explicação e código.
3. **Crie ou reestruture**:
   - Nota nova: `yarn new <tipo> <caminho-em-docs> "Título"` e preencha o arquivo gerado.
   - Nota existente ou texto colado: encaixe o conteúdo nas seções do template, na ordem do guia. Preserve o texto e a voz do autor; o que não couber em nenhuma seção vira uma seção específica entre "Como funciona" e "Aplicações". Nada do conteúdo original se perde.
4. **Ligue**: pelo menos um link relativo para outra nota (`../data-structures/stack.md`). Se a técnica da nota aparece em outra nota, ligue (ou crie, a partir de duas ocorrências) a nota de padrão em `docs/algorithms/patterns/` e acrescente um item em "Onde aparece" dizendo como o padrão aparece ali. "Mencionado em" é gerada no build.
5. **Torne testável**: cerca de três perguntas de revisão de porquê e quando, que façam sentido fora da nota. Em problemas, escreva o "Insight-chave" e "Como reconhecer o padrão" no lugar das perguntas.
6. **Pasta nova** (seção ou categoria): crie `_category_.json` com `key` estável, `label`, `position` e `link` (copie de `docs/algorithms/sorting/_category_.json`), rode `yarn i18n:write-en` e traduza as mensagens novas em `i18n/en/docusaurus-plugin-content-docs/current.json`.
7. **Tradução** é opcional. Quando a versão em inglês existir, atualize-a junto: mesmas seções, mesma ordem, mesmo `sidebar_position`, cabeçalhos em inglês da tabela do guia.

## Pronto quando

- `yarn check:notes <arquivos alterados>` passa sem erros
- `yarn build` passa, se você criou pasta, mudou links ou criou nota nova
