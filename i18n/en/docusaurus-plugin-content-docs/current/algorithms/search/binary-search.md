---
sidebar_label: "Binary Search"
description: "Searching sorted arrays by halving the interval, O(log n)."
---

# Binary search

**Binary search** finds an element in a **sorted** array by halving the search interval at each step, until it finds the target or the interval is exhausted.

:::warning[Prerequisite]

The array **must be sorted**. On an unsorted array, binary search may miss elements that are present.

:::

## How it works

1. Compare the middle element of the interval with the target.
2. If they are equal, return the middle position.
3. If the target is smaller, keep searching only the left half.
4. If the target is larger, keep searching only the right half.
5. Repeat until the target is found or the interval is empty.

## Complexity

| Metric              | Complexity                          |
| :------------------ | :---------------------------------- |
| Time (best case)    | O(1)                                |
| Time (average case) | O(log n)                            |
| Time (worst case)   | O(log n)                            |
| Space               | O(1) iterative, O(log n) recursive  |

## Implementation

### Iterative

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # not found
```

### Recursive

```python
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    if arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    return binary_search_recursive(arr, target, left, mid - 1)
```

## Usage example

```python
arr = [1, 3, 5, 7, 9, 11, 13, 15]

print(binary_search(arr, 7))   # Output: 3
print(binary_search(arr, 4))   # Output: -1
```

## Pros and cons

### Advantages

- Very efficient on large arrays
- The iterative version uses no extra memory

### Disadvantages

- Requires sorted data
- Requires O(1) access by index, which does not work well on linked lists
- The recursive version uses O(log n) stack space

## When to use

- For repeated searches over a large sorted collection
- To find boundaries in monotonic search spaces (for example, the smallest value that satisfies a condition)

## Related

- [Array](../../data-structures/array.md)
- [Big O notation](../../concepts/big-o-notation.md)
- [Binary tree](../../data-structures/binary-tree.md)
