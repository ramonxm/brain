---
sidebar_label: "Swap"
description: "Exchanging values between two variables or array positions."
---

# Swap

**Swap** is the operation of exchanging the values of two variables (or two array positions): after the swap, each one holds the value the other had. It is the foundation of sorting algorithms such as Bubble Sort, Selection Sort and Quick Sort.

## How it works

### With a temporary variable

The classic approach uses a third variable so that neither value is lost during the swap.

```python
a, b = 5, 10

temp = a
a = b
b = temp

print(a, b)  # Output: 10 5
```

### With multiple assignment

Many languages swap values directly through multiple assignment (or destructuring), without an explicit temporary variable.

```python
a, b = b, a
```

```ts
[a, b] = [b, a];
```

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(1)       |
| Space  | O(1)       |

## Implementation

Reversing an array with two indices that walk from both ends toward the center, swapping each pair of elements:

```ts
function reverse(array: number[]): number[] {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array;
}

console.log(reverse([10, 30, 40, 55])); // Output: [55, 40, 30, 10]
```

## Applications

- Comparison-based sorting algorithms
- Reversing and rotating arrays
- Shuffling (Fisher–Yates algorithm)

## Related

- [Bubble Sort](../algorithms/sorting/bubble-sort.md)
- [Selection Sort](../algorithms/sorting/selection-sort.md)
- [Quick Sort](../algorithms/sorting/quick-sort.md)
