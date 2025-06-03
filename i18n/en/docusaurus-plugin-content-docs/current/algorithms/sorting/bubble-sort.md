# 🔄 Bubble Sort

## Introduction

**Bubble Sort** is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

## Complexity
- **Time**: O(n²) in the worst and average case
- **Space**: O(1) (in-place)

## How It Works
1. Compare each pair of adjacent elements
2. Swap them if they are in the wrong order
3. After each pass, the largest unsorted element "bubbles up" to its correct position
4. Repeat until no swaps are needed

## Implementation
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
```

## Usage Example
```python
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 34, 64, 90]
```

## Advantages and Disadvantages

### ✅ Advantages
- Simple to understand and implement
- Does not require extra memory (in-place)
- Can detect if the list is already sorted (optimized version)

### ❌ Disadvantages
- Very slow for large lists (O(n²))
- Not suitable for large datasets

## When to Use Bubble Sort
- For educational purposes and learning sorting concepts
- When working with very small or nearly sorted datasets

## Related Algorithms
- **Selection Sort**: Selects the minimum element and places it at the beginning
- **Insertion Sort**: Builds the sorted array one item at a time 