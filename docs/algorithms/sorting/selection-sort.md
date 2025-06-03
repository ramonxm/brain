# 🔄 Selection Sort

## Introduction

**Selection Sort** is a simple comparison-based sorting algorithm. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the beginning (or end) of the list.

## Complexity
- **Time**: O(n²) in the worst and average case
- **Space**: O(1) (in-place)

## How It Works
1. Find the minimum element in the unsorted part
2. Swap it with the first unsorted element
3. Move the boundary of the sorted part one step forward
4. Repeat until the list is sorted

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

## Usage Example
```python
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 64]
```

## Advantages and Disadvantages

### ✅ Advantages
- Simple to understand and implement
- Does not require extra memory (in-place)
- Performs well on small lists

### ❌ Disadvantages
- Very slow for large lists (O(n²))
- Not stable by default (can be made stable with modifications)

## When to Use Selection Sort
- For educational purposes and learning sorting concepts
- When working with very small datasets

## Related Algorithms
- **Bubble Sort**: Swaps adjacent elements to sort
- **Insertion Sort**: Builds the sorted array one item at a time 