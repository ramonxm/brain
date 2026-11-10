---
sidebar_label: "Overview"
sidebar_position: 1
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

## Paradigms and patterns

Ideas that recur across algorithms and problems. Each pattern note lists the places where it shows up, which helps you recognize it in new problems.

- [Greedy algorithms](./greedy/index.md): the best local choice at each step
- [Divide and conquer](./patterns/divide-and-conquer.md): split, solve the parts and combine
- [Two pointers](./patterns/two-pointers.md): two indices that move by their own rules
- [Hash map as an index](./patterns/hash-map-lookup.md): trade O(n) searches for O(1) lookups

## Competitive programming

Annotated solutions to **LeetCode** problems (such as [Two Sum](./contests/leetcode/two-sum.md) and [Sort List](./contests/leetcode/sort-list.md)) and **AtCoder** contests (such as [ABC 156](./contests/atcoder/abc156.md)).
