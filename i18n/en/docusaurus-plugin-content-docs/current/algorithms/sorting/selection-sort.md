---
sidebar_label: "Selection Sort"
description: "Sorting by selecting the smallest element on each pass, O(n²)."
---

# Selection Sort

**Selection Sort** is a comparison-based sorting algorithm that, on each pass, selects the smallest element of the unsorted part and puts it in its final position.

## How it works

1. Find the smallest element in the unsorted part of the array.
2. Swap it with the first element of the unsorted part.
3. Move the boundary of the sorted part one position forward.
4. Repeat until the whole array is sorted.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n²)      |
| Space  | O(1)       |

The number of comparisons is always the same regardless of the input, so all three cases are O(n²). The algorithm is **in-place** but **not stable**.

## Implementation

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
```

## Usage example

```python
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 64]
```

## Pros and cons

### Advantages

- Simple to understand and implement
- Uses no extra memory
- Performs at most n − 1 swaps, useful when writing to memory is expensive

### Disadvantages

- Very slow for large arrays
- Does not benefit from nearly sorted arrays
- Not stable

## When to use

- For teaching, when comparing sorting algorithms
- On very small collections, where simplicity matters more than performance

## Related

- [Bubble Sort](./bubble-sort.md)
- [Quick Sort](./quick-sort.md)
- [Swap](../../concepts/swap.md)
- Insertion Sort
