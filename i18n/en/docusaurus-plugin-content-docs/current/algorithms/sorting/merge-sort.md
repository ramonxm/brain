---
sidebar_label: "Merge Sort"
description: "Stable divide-and-conquer sorting, O(n log n)."
---

# Merge Sort

**Merge Sort** is a **divide-and-conquer** sorting algorithm: it splits the array into two halves, sorts each one recursively and then merges the two sorted halves.

## How it works

1. If the array has 0 or 1 elements, it is already sorted.
2. Split the array into two halves.
3. Sort each half recursively.
4. Merge the two halves by comparing their first elements and always copying the smaller one.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n log n) |
| Space  | O(n)       |

The array is split log n times, and each recursion level does O(n) work while merging. The algorithm is **stable** but **not in-place**.

## Implementation

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    // <= keeps the relative order of equal elements (stability)
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}
```

## Usage example

```ts
const sorted = mergeSort([38, 27, 43, 3, 9, 82, 10]);
console.log(sorted); // Output: [3, 9, 10, 27, 38, 43, 82]
```

## Pros and cons

### Advantages

- Guaranteed O(n log n) in every case
- Stable
- Great for linked lists and for sorting data that does not fit in memory (external sorting)

### Disadvantages

- Uses O(n) extra memory
- Slower than simple algorithms on small arrays

## When to use

- When the sort must be stable
- When worst-case performance matters
- To sort [linked lists](../../data-structures/linked-list.md)

## Related

- [Quick Sort](./quick-sort.md)
- [Sort List](../contests/leetcode/sort-list.md)
- [Big O notation](../../concepts/big-o-notation.md)
