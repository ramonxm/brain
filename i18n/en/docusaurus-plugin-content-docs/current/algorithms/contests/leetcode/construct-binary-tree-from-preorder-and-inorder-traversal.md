---
sidebar_label: "Construct Binary Tree"
description: "Rebuild a binary tree from its preorder and inorder traversals."
---

# Construct Binary Tree from Preorder and Inorder Traversal

Rebuilding a [binary tree](../../../data-structures/binary-tree.md) from two traversals, using the fact that preorder reveals the roots and inorder separates the subtrees.

:::info[Source]

[LeetCode 105 — Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

:::

## Problem

Given two integer arrays `preorder` and `inorder`, which are, respectively, the preorder and inorder traversals of the same binary tree (with distinct values), construct and return the tree.

## Solution

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

## Explanation

1. The first element of `preorder` is always the **root** of the current (sub)tree.
2. Locate that root in `inorder`: everything to its left belongs to the left subtree and everything to its right to the right subtree.
3. Repeat the process recursively for each side. Since preorder visits the left subtree before the right one, consuming `preorder` with `shift()` yields the roots in the right order.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n²)      |
| Space  | O(n²)      |

In the worst case (a degenerate tree), each call performs `indexOf`, `shift` and `slice` in O(n), and the copies of `inorder` add up to O(n²) memory.

:::tip[Optimization]

Precomputing a value → index `Map` for `inorder`, walking `preorder` with an index and working with bounds (`left`, `right`) instead of `slice` brings both time and space down to **O(n)**.

:::

## Test cases

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
// Output: [3, 9, 20, null, null, 15, 7]
console.log(levelOrder(buildTree([-1], [-1])));
// Output: [-1]
```

## Related

- [Binary tree](../../../data-structures/binary-tree.md)
- [Breadth-first search (BFS)](../../graph/breadth-first-search.md)
