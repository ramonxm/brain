---
sidebar_label: "Sort List"
description: "Sort a linked list in O(n log n) with Merge Sort."
---

# Sort List

Sorting a linked list in O(n log n) by adapting [Merge Sort](../../sorting/merge-sort.md), which only needs to adjust pointers.

:::info[Source]

[LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)

:::

## Problem

Given the `head` of a linked list, return the list sorted in ascending order.

## Solution

```ts
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  // Find the middle with slow and fast pointers
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Split the list into two halves
  const mid = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(mid));
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ?? l2;
  return dummy.next;
}
```

## Explanation

1. Find the middle of the list with two pointers: the slow one moves one node at a time and the fast one, two. When the fast pointer reaches the end, the slow one is at the middle.
2. Cut the list into two halves.
3. Sort each half recursively.
4. Merge the two sorted halves, using a sentinel node (`dummy`) to simplify building the resulting list.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n log n) |
| Space  | O(log n)   |

The space comes from the recursion stack; merging allocates no new nodes. The solution is **stable**.

## Test cases

```ts
function fromArray(values: number[]): ListNode | null {
  return values.reduceRight<ListNode | null>((next, val) => new ListNode(val, next), null);
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  for (let node = head; node; node = node.next) values.push(node.val);
  return values;
}

console.log(toArray(sortList(fromArray([4, 2, 1, 3]))));     // Output: [1, 2, 3, 4]
console.log(toArray(sortList(fromArray([-1, 5, 3, 4, 0])))); // Output: [-1, 0, 3, 4, 5]
console.log(toArray(sortList(fromArray([3, 1, 3, 1]))));     // Output: [1, 1, 3, 3]
console.log(toArray(sortList(fromArray([]))));               // Output: []
```

## Related

- [Merge Sort](../../sorting/merge-sort.md)
- [Linked list](../../../data-structures/linked-list.md)
