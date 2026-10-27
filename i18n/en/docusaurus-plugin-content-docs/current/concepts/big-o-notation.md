---
sidebar_label: "Big O Notation"
description: "How to measure how an algorithm's time and memory grow as the input increases."
---

# Big O Notation

**Big O notation** describes how an algorithm's running time or memory usage grows as the input size (`n`) increases. It does not measure real time in seconds, but the **growth rate** in the worst case.

## How it works

1. Count the operations performed as a function of `n`.
2. Keep only the fastest-growing term.
3. Drop multiplicative constants.

For example, an algorithm that performs `3n² + 5n + 2` operations is **O(n²)**: for large inputs, the `n²` term dominates the others.

```python
def has_duplicates(items):
    for i in range(len(items)):          # n iterations
        for j in range(i + 1, len(items)):  # up to n iterations
            if items[i] == items[j]:
                return True
    return False
# Two nested loops over n elements: O(n²)
```

## Main complexities

| Complexity | Name        | Growth                        | Example                              |
| :--------- | :---------- | :---------------------------- | :----------------------------------- |
| O(1)       | Constant    | Does not depend on n          | Accessing an array by index          |
| O(log n)   | Logarithmic | Halves the problem            | Binary search                        |
| O(n)       | Linear      | Proportional to n             | Iterating over a list                |
| O(n log n) | Quasilinear | Between linear and quadratic  | Merge Sort, Quick Sort (average)     |
| O(n²)      | Quadratic   | Compares every pair           | Bubble Sort, Selection Sort          |
| O(2ⁿ)      | Exponential | Doubles with each new element | Generating every subset              |
| O(n!)      | Factorial   | Tries every permutation       | Brute-force traveling salesman       |

From most to least efficient:

```text
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
```

O(2ⁿ) and O(n!) become impractical even for small inputs: with `n = 20`, O(2ⁿ) already exceeds one million operations and O(n!) exceeds 10¹⁸.

## Applications

- Comparing solutions before implementing them
- Choosing the right data structure for each operation
- Predicting whether an algorithm will scale to large inputs

## When to use

- When deciding between two approaches to the same problem
- When checking whether a solution fits a contest problem's time limits

:::tip[How to remember]

O(1): direct access · O(log n): halving · O(n): one loop · O(n log n): divide and conquer · O(n²): two nested loops · O(2ⁿ): every combination · O(n!): every ordering

:::

## Related

- [Binary search](../algorithms/search/binary-search.md)
- [Merge Sort](../algorithms/sorting/merge-sort.md)
- [Data structures](../data-structures/index.md)
