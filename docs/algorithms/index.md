---
sidebar_label: "Visão geral"
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

## Paradigmas

- [Algoritmos Gulosos](./greedy/index.md): a melhor escolha local a cada passo

## Programação competitiva

Soluções comentadas de problemas do **LeetCode** (como [Two Sum](./contests/leetcode/two-sum.md) e [Sort List](./contests/leetcode/sort-list.md)) e do **AtCoder** (como o [ABC 156](./contests/atcoder/abc156.md)).
