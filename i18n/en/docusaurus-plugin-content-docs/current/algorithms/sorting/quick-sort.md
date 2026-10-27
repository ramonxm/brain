---
sidebar_label: "Quick Sort"
description: "In-place sorting by partitioning around a pivot, O(n log n) on average."
---

# Quick Sort

**Quick Sort** is a **divide-and-conquer** sorting algorithm that picks an element as the **pivot** and partitions the array around it: smaller elements to the left, larger ones to the right. It then sorts each side recursively.

## How it works

1. Pick a pivot (in this implementation, the last element).
2. Partition the array so that elements less than or equal to the pivot end up on the left and larger ones on the right.
3. Place the pivot between the two parts, in its final position.
4. Apply the same process recursively to the left and right parts.

## Complexity

| Metric              | Complexity |
| :------------------ | :--------- |
| Time (best case)    | O(n log n) |
| Time (average case) | O(n log n) |
| Time (worst case)   | O(n²)      |
| Space               | O(log n)   |

The worst case happens when the pivot is always the smallest or largest element (for example, using the last element as pivot on an already sorted array). The algorithm is **in-place** but **not stable**.

## Implementation

```ts
function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place the pivot in its final position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
```

## Usage example

```ts
const sorted = quickSort([10, 7, 8, 9, 1, 5]);
console.log(sorted); // Output: [1, 5, 7, 8, 9, 10]
```

## Pros and cons

### Advantages

- Very fast in practice, with low constants
- In-place, uses little memory
- Good cache usage

### Disadvantages

- O(n²) in the worst case
- Not stable
- Performance depends on the pivot choice

:::tip[Avoiding the worst case]

Choosing the pivot at random, or as the median of three elements (start, middle and end), makes the worst case very unlikely.

:::

## When to use

- To sort large in-memory arrays
- When extra memory is a constraint
- When stability is not required

## Related

- [Merge Sort](./merge-sort.md)
- [Selection Sort](./selection-sort.md)
- [Swap](../../concepts/swap.md)
