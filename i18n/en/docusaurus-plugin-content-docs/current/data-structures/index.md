---
sidebar_label: "Overview"
description: "Ways of organizing data in memory and the cost of each operation."
---

# Data Structures

A data structure defines **how data is organized** and, as a result, how much it costs to access, insert, search or remove an element. Choosing the right structure often matters more than optimizing the code itself.

## Comparison

| Structure                                   | Access      | Search     | Insertion       | Removal         |
| :------------------------------------------ | :---------- | :--------- | :-------------- | :-------------- |
| [Array](./array.md)                         | O(1)        | O(n)       | O(n)            | O(n)            |
| [Linked List](./linked-list.md)             | O(n)        | O(n)       | O(1) at head    | O(1) at head    |
| [Stack](./stack.md)                         | O(1) top    | O(n)       | O(1)            | O(1)            |
| [Queue](./queue.md)                         | O(1) front  | O(n)       | O(1)            | O(1)            |
| [Binary Search Tree](./binary-tree.md)      | O(log n)\*  | O(log n)\* | O(log n)\*      | O(log n)\*      |

\* For balanced trees. In the worst case (a degenerate tree), operations degrade to O(n).

:::tip[Where to start]

If you are not yet familiar with [Big O Notation](../concepts/big-o-notation.md), read it first: the table above uses it.

:::
