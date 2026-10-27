# Guia de escrita

Padrão seguido por todos os artigos de `docs/` (pt-BR) e `i18n/en/.../current/` (en). As duas versões de um artigo têm **as mesmas seções, na mesma ordem**.

## Princípios

- **Direto ao ponto**: frases curtas, voz ativa, sem introduções genéricas ("Neste artigo vamos ver...").
- **Impessoal nas explicações**; "você" apenas em recomendações ("Quando usar").
- **Termo em português com o original em inglês** na primeira menção quando o termo em inglês também é usado: "pilha (*stack*)". Nomes consagrados (Bubble Sort, Merge Sort, IAM) ficam em inglês.
- **Negrito** só na primeira menção do conceito principal e em termos definidos em listas.

## Estrutura

Todo artigo começa com o frontmatter e um único `#`, seguido de um **parágrafo de abertura** (1 a 3 frases) que define o assunto. Não existe seção "Introdução".

```md
---
sidebar_label: "Nome curto"
description: "Uma frase que resume o artigo."
---

# Título completo

O **termo** é ... (definição em 1–3 frases).
```

As seções seguintes dependem do tipo de artigo. Omita as que não se aplicam, mas **não mude a ordem nem o nome**.

Seções específicas do assunto (por exemplo, `## Principais complexidades` ou `## Comparativo`) podem ser incluídas entre `## Como funciona` e `## Aplicações`. Tabelas de complexidade com casos distintos (como árvore balanceada vs. pior caso) podem ter uma coluna por caso.

### Conceito e estrutura de dados

| pt-BR                       | en                       |
| :-------------------------- | :----------------------- |
| `## Como funciona`          | `## How it works`        |
| `## Complexidade`           | `## Complexity`          |
| `## Implementação`          | `## Implementation`      |
| `## Aplicações`             | `## Applications`        |
| `## Vantagens e desvantagens` | `## Pros and cons`     |
| `## Quando usar`            | `## When to use`         |
| `## Relacionados`           | `## Related`             |

### Algoritmo

| pt-BR                       | en                       |
| :-------------------------- | :----------------------- |
| `## Como funciona`          | `## How it works`        |
| `## Complexidade`           | `## Complexity`          |
| `## Implementação`          | `## Implementation`      |
| `## Exemplo de uso`         | `## Usage example`       |
| `## Vantagens e desvantagens` | `## Pros and cons`     |
| `## Quando usar`            | `## When to use`         |
| `## Relacionados`           | `## Related`             |

### Problema (LeetCode / AtCoder)

O parágrafo de abertura resume o problema e a ideia da solução em uma frase. Logo depois, um `:::info[Fonte]` (en: `:::info[Source]`) com o link do enunciado original.

| pt-BR             | en                  |
| :---------------- | :------------------ |
| `## Problema`     | `## Problem`        |
| `## Solução`      | `## Solution`       |
| `## Explicação`   | `## Explanation`    |
| `## Complexidade` | `## Complexity`     |
| `## Casos de teste` | `## Test cases`   |
| `## Relacionados` | `## Related`        |

Páginas de contest com vários problemas usam um `##` por problema (`## A - Nome`) e as seções acima como `###`.

### Tópico (AWS, banco de dados)

Seções livres, conforme o assunto, terminando em `## Boas práticas` (quando houver) e `## Relacionados`.

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

- Links internos com caminho relativo para o arquivo `.md`: `[Pilha](../data-structures/stack.md)`.
- A seção "Relacionados" lista apenas artigos que existem; temas ainda não escritos aparecem sem link.
