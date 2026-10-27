---
sidebar_label: "Bubble Sort"
description: "Sorting by comparing adjacent pairs, O(n²)."
---

# Bubble Sort

**Bubble Sort** is a comparison-based sorting algorithm that walks through the array several times, swapping adjacent pairs that are out of order. On each pass, the largest remaining element "bubbles up" to the end.

## How it works

1. Walk through the array comparing each pair of adjacent elements.
2. If the current element is greater than the next one, swap them.
3. At the end of the pass, the largest element is in the last position of the unsorted part.
4. Repeat, skipping the sorted part, until a pass finishes with no swaps.

## Complexity

| Metric              | Complexity |
| :------------------ | :--------- |
| Time (best case)    | O(n)       |
| Time (average case) | O(n²)      |
| Time (worst case)   | O(n²)      |
| Space               | O(1)       |

The best case happens with an already sorted array, thanks to the early exit when no swaps occur. The algorithm is **stable** and **in-place**.

## Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
```

## Usage example

```python
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 34, 64, 90]
```

## Pros and cons

### Advantages

- Simple to understand and implement
- Uses no extra memory
- Detects an already sorted array in O(n)

### Disadvantages

- Very slow for large arrays
- Rarely used outside teaching contexts

## When to use

- To learn the fundamentals of sorting
- On very small or nearly sorted collections

## Related

- [Selection Sort](./selection-sort.md)
- [Merge Sort](./merge-sort.md)
- [Swap](../../concepts/swap.md)
- Insertion Sort
