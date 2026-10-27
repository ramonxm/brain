---
sidebar_label: "Construct Binary Tree"
description: "Reconstrua uma árvore binária a partir dos percursos pré-ordem e em-ordem."
---

# Construct Binary Tree from Preorder and Inorder Traversal

Reconstruir uma [árvore binária](../../../data-structures/binary-tree.md) a partir de dois percursos, usando o fato de que a pré-ordem revela as raízes e a em-ordem separa as subárvores.

:::info[Fonte]

[LeetCode 105 — Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

:::

## Problema

Dados dois arrays de inteiros `preorder` e `inorder`, que são, respectivamente, os percursos em pré-ordem e em ordem da mesma árvore binária (com valores distintos), construa e retorne a árvore.

## Solução

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) {
    return null;
  }

  const index = inorder.indexOf(preorder.shift()!);
  const root = new TreeNode(inorder[index]);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
}
```

## Explicação

1. O primeiro elemento de `preorder` é sempre a **raiz** da (sub)árvore atual.
2. Localize essa raiz em `inorder`: tudo à esquerda pertence à subárvore esquerda e tudo à direita, à subárvore direita.
3. Repita o processo recursivamente para cada lado. Como a pré-ordem visita a subárvore esquerda antes da direita, consumir `preorder` com `shift()` entrega as raízes na ordem certa.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n²)        |
| Espaço  | O(n²)        |

No pior caso (árvore degenerada), cada chamada faz `indexOf`, `shift` e `slice` em O(n), e as cópias de `inorder` somam O(n²) de memória.

:::tip[Otimização]

Pré-calcular um `Map` de valor → índice para `inorder`, percorrer `preorder` com um índice e trabalhar com limites (`left`, `right`) em vez de `slice` reduz tempo e espaço para **O(n)**.

:::

## Casos de teste

```ts
function levelOrder(root: TreeNode | null): (number | null)[] {
  const result: (number | null)[] = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift()!;
    result.push(node ? node.val : null);
    if (node) queue.push(node.left, node.right);
  }
  while (result.at(-1) === null) result.pop();
  return result;
}

console.log(levelOrder(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
// Saída: [3, 9, 20, null, null, 15, 7]
console.log(levelOrder(buildTree([-1], [-1])));
// Saída: [-1]
```

## Relacionados

- [Árvore binária](../../../data-structures/binary-tree.md)
- [Busca em largura (BFS)](../../graph/breadth-first-search.md)
