---
sidebar_label: "Visão geral"
description: "Formas de organizar dados na memória e o custo de cada operação."
---

# Estruturas de Dados

Uma estrutura de dados define **como os dados são organizados** e, por consequência, quanto custa acessar, inserir, buscar ou remover um elemento. Escolher a estrutura certa costuma ser mais importante do que otimizar o código em si.

## Comparativo

| Estrutura                            | Acesso   | Busca    | Inserção        | Remoção         |
| :----------------------------------- | :------- | :------- | :-------------- | :-------------- |
| [Array](./array.md)                  | O(1)     | O(n)     | O(n)            | O(n)            |
| [Lista Ligada](./linked-list.md)     | O(n)     | O(n)     | O(1) no início  | O(1) no início  |
| [Pilha](./stack.md)                  | O(1) topo | O(n)    | O(1)            | O(1)            |
| [Fila](./queue.md)                   | O(1) frente | O(n)  | O(1)            | O(1)            |
| [Árvore Binária de Busca](./binary-tree.md) | O(log n)\* | O(log n)\* | O(log n)\* | O(log n)\* |

\* Em árvores balanceadas. No pior caso (árvore degenerada), as operações caem para O(n).

:::tip[Por onde começar]

Se você ainda não conhece a [Notação Big O](../concepts/big-o-notation.md), leia-a antes: a tabela acima usa essa notação.

:::
