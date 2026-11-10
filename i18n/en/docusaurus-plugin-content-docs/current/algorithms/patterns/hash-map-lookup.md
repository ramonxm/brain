---
sidebar_label: "Hash Map as an Index"
sidebar_position: 3
description: "Trade O(n) searches for O(1) lookups by storing what you have already seen in a hash map."
---

# Hash map as an index

Storing what you have already seen in a **hash map** (value → index, value → count) trades O(n) searches for **O(1) average** lookups, at the cost of O(n) memory.

## How it works

1. Walk the data once.
2. For each element, look up what it needs in the map: a complement, a position, a count.
3. Store the current element in the map for the ones that follow.

Looking up **before** storing prevents an element from matching itself.

## How to spot it

- The brute force has an inner loop that only searches for a value (`indexOf`, `in`, another `for`)
- You can compute exactly what you are looking for, such as the complement `target − x`
- O(n) extra memory is acceptable

## Where it shows up

- [Two Sum](../contests/leetcode/two-sum.md): a value → index map to find the complement in one pass
- [Construct Binary Tree](../contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md): a value → index map of `inorder` replaces `indexOf` and takes the solution from O(n²) to O(n)
- [Roman to Integer](../contests/leetcode/roman-to-integer.md): a fixed symbol → value table instead of a chain of `if`s
- [Linked list](../../data-structures/linked-list.md): LRU caches combine a doubly linked list with a hash map

## Comparison

To find a pair with a target sum:

| Approach                     | Time       | Space  | Requires                  |
| :--------------------------- | :--------- | :----- | :------------------------ |
| Brute force (every pair)     | O(n²)      | O(1)   | Nothing                   |
| Sort + two pointers          | O(n log n) | O(1)\* | Being able to reorder     |
| Hash map                     | O(n)       | O(n)   | Extra memory              |

\* Not counting the memory used by sorting.

## Review questions

<details>
<summary>In Two Sum, why look up the complement before inserting the current number?</summary>

So the same element isn't used twice. With target `6` and a single `3`, inserting first would let the `3` match itself.

</details>

<details>
<summary>What does this technique cost?</summary>

O(n) extra memory. In exchange, each lookup costs O(1) on average.

</details>

<details>
<summary>When is a hash map not the best option?</summary>

When the problem requires O(1) memory, as in [Single Number](../contests/leetcode/single-number.md), which uses XOR, or when the data is already sorted and [two pointers](./two-pointers.md) are enough.

</details>

## Related

- [Two pointers](./two-pointers.md)
- [Array](../../data-structures/array.md)
- [Big O notation](../../concepts/big-o-notation.md)
