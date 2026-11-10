---
sidebar_label: "Divide and Conquer"
sidebar_position: 1
description: "Split the problem into smaller parts of the same kind, solve each one and combine the results."
---

# Divide and conquer

**Divide and conquer** solves a problem by splitting it into smaller subproblems **of the same kind**, solving each one recursively and combining the results.

## How it works

1. **Divide** the input into smaller parts.
2. **Conquer** each part recursively, down to a trivial base case.
3. **Combine** the solutions of the parts into the solution of the whole problem.

The cost depends on where the work is. Halving and combining in O(n) gives log n levels of O(n) each: **O(n log n)**. Halving and discarding one half gives log n levels of O(1): **O(log n)**.

## How to spot it

- The problem restricted to half of the input has the same shape as the whole problem
- There is a cheap way to combine the parts, or to discard one of them
- The expected complexity has a log n in it

## Where it shows up

- [Merge Sort](../sorting/merge-sort.md): trivial split (in half), all the work in combining (merging)
- [Quick Sort](../sorting/quick-sort.md): all the work in splitting (partitioning), trivial combine
- [Binary search](../search/binary-search.md): splits and discards one half, with no combine step
- [Sort List](../contests/leetcode/sort-list.md): Merge Sort adapted to a linked list
- [Construct Binary Tree](../contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md): the root splits the traversals into the two subtrees
- [Binary tree](../../data-structures/binary-tree.md): every subtree is a tree, so recursive algorithms follow the same shape

## Comparison

| Algorithm      | Where the work is | Subproblems solved | Complexity   |
| :------------- | :---------------- | :----------------- | :----------- |
| Merge Sort     | Combine           | 2                  | O(n log n)   |
| Quick Sort     | Divide            | 2                  | O(n log n)\* |
| Binary search  | Divide            | 1                  | O(log n)     |

\* On average. Unbalanced partitions push Quick Sort to O(n²).

## Review questions

<details>
<summary>In Merge Sort and Quick Sort, where does each one do its work?</summary>

Merge Sort works in the combine step (merging the halves). Quick Sort works in the divide step (partitioning around the pivot).

</details>

<details>
<summary>Why is binary search O(log n), and not O(n log n)?</summary>

It solves only one of the subproblems and has no combine step: each level costs O(1).

</details>

<details>
<summary>What is the difference between divide and conquer and dynamic programming?</summary>

In divide and conquer, subproblems are independent. When they repeat, storing the results (dynamic programming) avoids recomputing them.

</details>

## Related

- [Two pointers](./two-pointers.md)
- [Greedy algorithms](../greedy/index.md)
- [Big O notation](../../concepts/big-o-notation.md)
- Dynamic programming
