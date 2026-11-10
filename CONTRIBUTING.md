# Guia de escrita

Como as notas deste repositório são escritas, ligadas e revisadas. O objetivo não é só consultar: é **fixar** o conteúdo. Por isso toda nota permanente termina com perguntas para se testar, e as notas se ligam entre si como um Zettelkasten.

## Fluxo de uma nota

| Camada           | Onde                         | Publicada | Formato                       |
| :--------------- | :--------------------------- | :-------: | :---------------------------- |
| Captura          | `docs/_inbox/`               |    Não    | Livre                         |
| Rascunho         | Seção certa, `draft: true`   | Só no dev | Template, incompleto          |
| Nota permanente  | Seção certa                  |    Sim    | Template completo             |
| TIL              | `til/AAAA-MM-DD-slug.md`     |    Sim    | Livre, curto                  |

1. **Capture** sem se preocupar com o formato: `yarn new nota "Título"` (ou uma nota nova no Obsidian, que já cai na inbox).
2. **Processe a inbox** uma vez por semana. Para cada nota, reescreva a ideia com suas palavras e decida: vira uma nota permanente, complementa uma existente ou é descartada.
3. **Promova** criando a nota a partir do template (`yarn new <tipo> <caminho> "Título"`). Enquanto estiver incompleta, mantenha `draft: true` no frontmatter: ela aparece no `yarn start`, mas não no site publicado.
4. **Ligue** a nota a pelo menos uma nota existente. Os backlinks ("Mencionado em") aparecem sozinhos na nota de destino.
5. **Revise** com as perguntas de revisão, no site ou no Anki (`yarn anki`).

O **TIL** é para o que não merece uma nota inteira: uma descoberta do dia, em poucas linhas.

## Princípios

- **Uma ideia por nota**: se duas notas repetem a mesma explicação ou o mesmo código, uma delas deve apenas apontar para a outra. LIFO explica a política; a pilha explica a estrutura e a implementação.
- **Com suas palavras**: reescrever o que entendeu fixa mais do que copiar a definição. Prefira explicar o porquê ao o quê.
- **Sempre ligada**: toda nota permanente tem pelo menos um link para outra nota. Uma nota sem links não é encontrada nem relembrada.
- **Testável**: se você não consegue escrever uma pergunta sobre a nota, ela ainda não está clara.
- **Direto ao ponto**: frases curtas, voz ativa, sem introduções genéricas ("Neste artigo vamos ver...").
- **Impessoal nas explicações**; "você" apenas em recomendações ("Quando usar").
- **Termo em português com o original em inglês** na primeira menção quando o termo em inglês também é usado: "pilha (*stack*)". Nomes consagrados (Bubble Sort, Merge Sort, IAM) ficam em inglês.
- **Negrito** só na primeira menção do conceito principal e em termos definidos em listas.

## Estrutura

Todo artigo começa com o frontmatter e um único `#`, seguido de um **parágrafo de abertura** (1 a 3 frases) que define o assunto. Não existe seção "Introdução".

```md
---
sidebar_label: "Nome curto"
sidebar_position: 3
description: "Uma frase que resume o artigo."
---

# Título completo

O **termo** é ... (definição em 1–3 frases).
```

- `sidebar_position` é opcional: sem ele, a nota vai para o fim da seção, em ordem alfabética.
- A sidebar é gerada a partir das pastas. Uma subpasta vira categoria, configurada pelo seu `_category_.json` (com um `key` estável para as traduções).

As seções seguintes dependem do tipo de artigo. Omita as que não se aplicam, mas **não mude a ordem nem o nome**.

Seções específicas do assunto (por exemplo, `## Principais complexidades` ou `## Comparativo`) podem ser incluídas entre `## Como funciona` e `## Aplicações`. Tabelas de complexidade com casos distintos (como árvore balanceada vs. pior caso) podem ter uma coluna por caso.

A seção `## Mencionado em` (en: `## Mentioned in`) é **gerada no build** a partir dos links das outras notas. Não a escreva à mão.

### Conceito e estrutura de dados

Template: `docs/_templates/conceito.md`.

| pt-BR                         | en                       |
| :---------------------------- | :----------------------- |
| `## Como funciona`            | `## How it works`        |
| `## Complexidade`             | `## Complexity`          |
| `## Implementação`            | `## Implementation`      |
| `## Aplicações`               | `## Applications`        |
| `## Vantagens e desvantagens` | `## Pros and cons`       |
| `## Quando usar`              | `## When to use`         |
| `## Perguntas de revisão`     | `## Review questions`    |
| `## Relacionados`             | `## Related`             |

### Algoritmo

Template: `docs/_templates/algoritmo.md`.

| pt-BR                         | en                       |
| :---------------------------- | :----------------------- |
| `## Como funciona`            | `## How it works`        |
| `## Complexidade`             | `## Complexity`          |
| `## Implementação`            | `## Implementation`      |
| `## Exemplo de uso`           | `## Usage example`       |
| `## Vantagens e desvantagens` | `## Pros and cons`       |
| `## Quando usar`              | `## When to use`         |
| `## Perguntas de revisão`     | `## Review questions`    |
| `## Relacionados`             | `## Related`             |

### Problema (LeetCode / AtCoder)

Template: `docs/_templates/problema.md`.

O parágrafo de abertura resume o problema e a ideia da solução em uma frase. Logo depois, um `:::info[Fonte]` (en: `:::info[Source]`) com o link do enunciado original.

| pt-BR                         | en                           |
| :---------------------------- | :--------------------------- |
| `## Problema`                 | `## Problem`                 |
| `## Insight-chave`            | `## Key insight`             |
| `## Solução`                  | `## Solution`                |
| `## Explicação`               | `## Explanation`             |
| `## Complexidade`             | `## Complexity`              |
| `## Casos de teste`           | `## Test cases`              |
| `## Como reconhecer o padrão` | `## How to spot the pattern` |
| `## Relacionados`             | `## Related`                 |

- **Insight-chave**: a observação que destrava a solução, em 1 a 3 frases. É o que vale lembrar do problema; vira um cartão no Anki.
- **Como reconhecer o padrão**: os sinais no enunciado ou na força bruta que apontam para a técnica, terminando com o link para a nota de padrão (`Padrão: [Dois ponteiros](../../patterns/two-pointers.md).`), quando houver.

Páginas de contest com vários problemas usam um `##` por problema (`## A - Nome`) e as seções acima como `###`, exceto "Como reconhecer o padrão", que fica no fim da página como `##`, com um item por problema.

### Padrão

Template: `docs/_templates/padrao.md`. Notas de padrão ficam em `docs/algorithms/patterns/` e funcionam como **notas de estrutura**: elas ligam os lugares onde uma ideia aparece. Crie uma quando a mesma técnica aparecer em pelo menos duas notas.

| pt-BR                     | en                       |
| :------------------------ | :----------------------- |
| `## Como funciona`        | `## How it works`        |
| `## Como reconhecer`      | `## How to spot it`      |
| `## Onde aparece`         | `## Where it shows up`   |
| `## Comparativo`          | `## Comparison`          |
| `## Perguntas de revisão` | `## Review questions`    |
| `## Relacionados`         | `## Related`             |

Em "Onde aparece", cada item diz **como** o padrão aparece naquela nota, e não só o link.

### Tópico (AWS, banco de dados)

Seções livres, conforme o assunto, terminando em `## Boas práticas` (quando houver), `## Perguntas de revisão` e `## Relacionados`.

## Perguntas de revisão

Três perguntas por nota, em média, no formato abaixo. A resposta fica escondida no site e vira o verso do cartão no Anki.

```md
## Perguntas de revisão

<details>
<summary>Por que o acesso por índice em um array é O(1)?</summary>

Os elementos são contíguos, então o endereço é calculado diretamente: `início + i × tamanho_do_elemento`.

</details>
```

- Pergunte o **porquê** e o **quando**, não só o **o quê**: "Por que a BFS acha o menor caminho?" fixa mais que "O que é BFS?"
- Uma ideia por pergunta, com resposta de 1 a 2 frases
- Inclua contraexemplos e armadilhas ("Quando o Quick Sort cai para O(n²)?")
- A pergunta precisa fazer sentido sozinha, fora da nota: no Anki, ela aparece com o título da nota como prefixo

### Anki

`yarn anki` gera `anki/brain-pt-BR.txt` e `anki/brain-en.txt` com todas as perguntas de revisão e todos os insights-chave. No Anki, use **Arquivo > Importar**. Cada cartão tem um id estável, então importar de novo atualiza os cartões existentes em vez de duplicá-los. As tags seguem o caminho da nota (`algorithms::sorting::merge-sort`).

## Validação

`yarn check:notes` confere as notas contra este guia: frontmatter, título único, seções obrigatórias e ordem por tipo, perguntas de revisão, blocos de código com linguagem, links quebrados, `_category_.json` das pastas e a paridade com a tradução. Roda no CI e, no Claude Code, depois de cada edição de nota (hook em `.claude/settings.json`). Para validar só alguns arquivos: `yarn check:notes docs/concepts/swap.md`.

Rascunhos (`draft: true`) e visões gerais de seção só passam pelas checagens de formato, sem exigência de seções.

## Formatos

### Títulos

- *Sentence case*: só a primeira palavra e nomes próprios com maiúscula ("Como funciona", "Pros and cons").
- Sem emojis, sem numeração e sem pontuação final.

### Complexidade

Sempre em tabela de duas colunas.

```md
| Métrica             | Complexidade |
| :------------------ | :----------- |
| Tempo (melhor caso) | O(n log n)   |
| Tempo (caso médio)  | O(n log n)   |
| Tempo (pior caso)   | O(n²)        |
| Espaço              | O(log n)     |
```

- Quando os três casos são iguais, use uma única linha `Tempo`. Problemas usam apenas `Tempo` e `Espaço`.
- Estruturas de dados usam `| Operação | Complexidade |`, uma linha por operação.
- en: `| Metric | Complexity |`, `Time (best case)`, `Time (average case)`, `Time (worst case)`, `Space`; `| Operation | Complexity |`.
- Notação: `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)`, `O(n!)`, `O(V + E)`.
- Observações sobre a complexidade vão em uma frase logo abaixo da tabela.

### Listas

- Itens com marcador: fragmentos curtos, iniciando com maiúscula e **sem ponto final**.
- Definições: `- **Termo**: descrição` (dois-pontos fora do negrito, descrição em minúscula).
- Passos numerados: frases completas no imperativo, **com ponto final**.

### Código

- Toda listagem tem a linguagem declarada (` ```python `, ` ```ts `, ` ```cpp `...).
- Comentários no idioma do artigo; saídas indicadas como `# Saída: ...` / `// Saída: ...` (en: `Output:`).
- Indentação: 4 espaços em Python, C e C++; 2 espaços em TypeScript e JavaScript.
- Nomes de variáveis e funções em inglês.

### Destaques

Use admonitions com título entre colchetes:

```md
:::warning[Pré-requisito]

O array precisa estar ordenado.

:::
```

`tip` para dicas e otimizações, `warning` para pré-requisitos e armadilhas, `info` para fontes e notas.

### Links

- Links internos com caminho relativo para o arquivo `.md`: `[Pilha](../data-structures/stack.md)`. É o formato que o Obsidian gera com a configuração do repositório.
- A seção "Relacionados" lista apenas artigos que existem; temas ainda não escritos aparecem sem link.
- Não aponte para notas com `draft: true` a partir de notas publicadas: o link quebra no build de produção.

## Tradução

A versão em inglês é **opcional**. Quando `i18n/en/docusaurus-plugin-content-docs/current/<caminho>.md` não existe, o site em inglês mostra a versão em português. Traduza as notas já maduras, que mudam pouco.

Quando houver tradução, as duas versões têm **as mesmas seções, na mesma ordem**, e os mesmos `sidebar_position`.

## Obsidian

A pasta `docs/` já é um vault do Obsidian (**Open folder as vault**), configurado para:

- Gerar links Markdown relativos (`[Pilha](../data-structures/stack.md)`), compatíveis com o Docusaurus
- Criar notas novas em `_inbox/`
- Usar `_templates/` como pasta de templates (ative o plugin nativo **Templates**)

Assim você ganha o grafo, o painel de backlinks e a busca do Obsidian para escrever e revisar, e o site continua sendo gerado das mesmas notas. Só `app.json` e `templates.json` de `docs/.obsidian/` são versionados.
