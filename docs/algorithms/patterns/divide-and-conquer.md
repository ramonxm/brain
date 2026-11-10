---
sidebar_label: "Divisão e Conquista"
sidebar_position: 1
description: "Dividir o problema em partes menores do mesmo tipo, resolver cada uma e combinar os resultados."
---

# Divisão e conquista

**Divisão e conquista** (*divide and conquer*) resolve um problema dividindo-o em subproblemas menores **do mesmo tipo**, resolvendo cada um recursivamente e combinando os resultados.

## Como funciona

1. **Divida** a entrada em partes menores.
2. **Conquiste** cada parte recursivamente, até chegar a um caso base trivial.
3. **Combine** as soluções das partes na solução do problema inteiro.

O custo depende de onde está o trabalho. Dividir ao meio e combinar em O(n) gera log n níveis de O(n) cada: **O(n log n)**. Dividir ao meio e descartar uma das metades gera log n níveis de O(1): **O(log n)**.

## Como reconhecer

- O problema restrito a uma metade da entrada tem a mesma forma que o problema inteiro
- Existe um jeito barato de combinar as partes, ou de descartar uma delas
- A complexidade esperada tem um log n

## Onde aparece

- [Merge Sort](../sorting/merge-sort.md): divisão trivial (ao meio), todo o trabalho na combinação (intercalar)
- [Quick Sort](../sorting/quick-sort.md): todo o trabalho na divisão (particionar), combinação trivial
- [Busca binária](../search/binary-search.md): divide e descarta uma das metades, sem combinação
- [Sort List](../contests/leetcode/sort-list.md): Merge Sort adaptado a uma lista ligada
- [Construct Binary Tree](../contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md): a raiz divide os percursos nas duas subárvores
- [Árvore binária](../../data-structures/binary-tree.md): cada subárvore é uma árvore, então algoritmos recursivos seguem o mesmo formato

## Comparativo

| Algoritmo      | Onde está o trabalho | Subproblemas resolvidos | Complexidade |
| :------------- | :------------------- | :---------------------- | :----------- |
| Merge Sort     | Combinar             | 2                       | O(n log n)   |
| Quick Sort     | Dividir              | 2                       | O(n log n)\* |
| Busca binária  | Dividir              | 1                       | O(log n)     |

\* Em média. Partições desbalanceadas levam o Quick Sort a O(n²).

## Perguntas de revisão

<details>
<summary>No Merge Sort e no Quick Sort, onde fica o trabalho de cada um?</summary>

No Merge Sort, na combinação (intercalar as metades). No Quick Sort, na divisão (particionar em torno do pivô).

</details>

<details>
<summary>Por que a busca binária é O(log n), e não O(n log n)?</summary>

Ela resolve apenas um dos subproblemas e não tem etapa de combinação: cada nível custa O(1).

</details>

<details>
<summary>Qual a diferença entre divisão e conquista e programação dinâmica?</summary>

Na divisão e conquista, os subproblemas são independentes. Quando eles se repetem, guardar os resultados (programação dinâmica) evita recalculá-los.

</details>

## Relacionados

- [Dois ponteiros](./two-pointers.md)
- [Algoritmos gulosos](../greedy/index.md)
- [Notação Big O](../../concepts/big-o-notation.md)
- Programação dinâmica
