---
sidebar_label: "Two Pointers"
sidebar_position: 2
description: "Walk a sequence with two indices that move by their own rules, in a single pass."
---

# Two pointers

The **two pointers** technique walks a sequence with two indices (or references) at once, moving each one by its own rule. It solves in a single pass what brute force would solve by comparing every pair.

## How it works

There are three main variations:

- **Opposite ends**: one pointer at the start and one at the end, moving toward the center
- **Same direction, different speeds**: a slow pointer and a fast one
- **One sequence per pointer**: each advances through its own, as when merging two sorted lists

At every step, the movement rule discards at least one candidate. That is why the total number of steps is O(n), not O(n²).

## How to spot it

- The data is sorted or forms a linear sequence
- Brute force would compare pairs in O(n²), but each comparison lets you discard one side
- You need the middle, the end or a cycle of a linked list without knowing its length

## Where it shows up

- [Swap](../../concepts/swap.md): reversing an array with `left` and `right` coming from the ends
- [Binary search](../search/binary-search.md): `left` and `right` bound the interval and close in
- [Quick Sort](../sorting/quick-sort.md): `i` marks the boundary of the smaller elements while `j` scans the array
- [Merge Sort](../sorting/merge-sort.md): `i` and `j` walk the two halves while merging
- [Sort List](../contests/leetcode/sort-list.md): slow and fast pointers to find the middle of the list

## Review questions

<details>
<summary>How do you find the middle of a linked list in a single pass?</summary>

The slow pointer moves one node at a time and the fast one moves two. When the fast pointer reaches the end, the slow one is in the middle.

</details>

<details>
<summary>Why do pointers at both ends find a pair with a target sum in a sorted array in O(n)?</summary>

If the sum is below the target, only moving the left pointer forward can increase it; if it is above, only moving the right pointer back can decrease it. Each step discards one element.

</details>

<details>
<summary>What property of the data does the technique usually require?</summary>

Sorting (or some other monotonicity), or a linear structure where moving a pointer safely discards candidates.

</details>

## Related

- [Divide and conquer](./divide-and-conquer.md)
- [Hash map as an index](./hash-map-lookup.md)
- [Array](../../data-structures/array.md)
- [Linked list](../../data-structures/linked-list.md)
