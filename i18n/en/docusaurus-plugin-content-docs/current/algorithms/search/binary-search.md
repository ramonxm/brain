# 🔍 Binary Search

## Introduction

**Binary Search** is an efficient search algorithm that works by repeatedly dividing a sorted array in half to find a specific element.

## Complexity
- **Time**: O(log n)
- **Space**: O(1) iterative, O(log n) recursive

## How It Works
1. Compare the middle element of the array to the target
2. If equal, the element is found
3. If the target is less, search the left half
4. If the target is greater, search the right half
5. Repeat until found or the search space is empty

## Implementation

### Iterative Version
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Element not found
```

### Recursive Version
```python
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
```

## Usage Example
```python
# Sorted array
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7

# Search
index = binary_search(arr, target)
print(f"Element {target} found at index: {index}")  # Output: 3
```

## Prerequisites
⚠️ **Important**: The array must be **sorted** for binary search to work correctly.

## Advantages and Disadvantages

### ✅ Advantages
- Very efficient for large arrays
- O(log n) time complexity
- Minimal memory usage in the iterative version

### ❌ Disadvantages
- Requires a sorted array
- Not efficient for linked lists
- O(log n) space complexity in the recursive version
