---
sidebar_label: "Overview"
description: "Classic sorting, search and graph algorithms, design paradigms and solved contest problems."
---

# Algorithms

Annotated implementations of classic algorithms, always with complexity, usage examples and when (not) to use them.

## Sorting

| Algorithm                                     | Best       | Average    | Worst      | Space    | Stable |
| :-------------------------------------------- | :--------- | :--------- | :--------- | :------- | :----: |
| [Bubble Sort](./sorting/bubble-sort.md)       | O(n)       | O(n²)      | O(n²)      | O(1)     |  Yes   |
| [Selection Sort](./sorting/selection-sort.md) | O(n²)      | O(n²)      | O(n²)      | O(1)     |   No   |
| [Merge Sort](./sorting/merge-sort.md)         | O(n log n) | O(n log n) | O(n log n) | O(n)     |  Yes   |
| [Quick Sort](./sorting/quick-sort.md)         | O(n log n) | O(n log n) | O(n²)      | O(log n) |   No   |

## Search and graphs

| Algorithm                                                    | Time     | Space |
| :----------------------------------------------------------- | :------- | :---- |
| [Binary Search](./search/binary-search.md)                   | O(log n) | O(1)  |
| [Breadth-First Search (BFS)](./graph/breadth-first-search.md) | O(V + E) | O(V)  |

## Paradigms

- [Greedy Algorithms](./greedy/index.md): the best local choice at each step

## Competitive programming

Annotated solutions to **LeetCode** problems (such as [Two Sum](./contests/leetcode/two-sum.md) and [Sort List](./contests/leetcode/sort-list.md)) and **AtCoder** contests (such as [ABC 156](./contests/atcoder/abc156.md)).
