---
sidebar_label: "Visão geral"
sidebar_position: 1
description: "Algoritmos clássicos de ordenação, busca e grafos, paradigmas de projeto e problemas de competição resolvidos."
---

# Algoritmos

Implementações comentadas de algoritmos clássicos, sempre acompanhadas de complexidade, exemplos de uso e quando (não) utilizá-los.

## Ordenação

| Algoritmo                                       | Melhor     | Médio      | Pior       | Espaço   | Estável |
| :---------------------------------------------- | :--------- | :--------- | :--------- | :------- | :-----: |
| [Bubble Sort](./sorting/bubble-sort.md)         | O(n)       | O(n²)      | O(n²)      | O(1)     |   Sim   |
| [Selection Sort](./sorting/selection-sort.md)   | O(n²)      | O(n²)      | O(n²)      | O(1)     |   Não   |
| [Merge Sort](./sorting/merge-sort.md)           | O(n log n) | O(n log n) | O(n log n) | O(n)     |   Sim   |
| [Quick Sort](./sorting/quick-sort.md)           | O(n log n) | O(n log n) | O(n²)      | O(log n) |   Não   |

## Busca e grafos

| Algoritmo                                                  | Tempo     | Espaço |
| :--------------------------------------------------------- | :-------- | :----- |
| [Busca Binária](./search/binary-search.md)                 | O(log n)  | O(1)   |
| [Busca em Largura (BFS)](./graph/breadth-first-search.md)  | O(V + E)  | O(V)   |

## Paradigmas e padrões

Ideias que se repetem em vários algoritmos e problemas. Cada nota de padrão lista os lugares onde ele aparece, o que ajuda a reconhecê-lo em problemas novos.

- [Algoritmos gulosos](./greedy/index.md): a melhor escolha local a cada passo
- [Divisão e conquista](./patterns/divide-and-conquer.md): dividir, resolver as partes e combinar
- [Dois ponteiros](./patterns/two-pointers.md): dois índices que se movem por regras próprias
- [Hash map como índice](./patterns/hash-map-lookup.md): trocar buscas O(n) por consultas O(1)

## Programação competitiva

Soluções comentadas de problemas do **LeetCode** (como [Two Sum](./contests/leetcode/two-sum.md) e [Sort List](./contests/leetcode/sort-list.md)) e do **AtCoder** (como o [ABC 156](./contests/atcoder/abc156.md)).
