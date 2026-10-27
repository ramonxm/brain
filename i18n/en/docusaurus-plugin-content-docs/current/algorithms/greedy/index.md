---
sidebar_label: "Greedy Algorithms"
description: "Algorithms that make the locally optimal choice at each step."
---

# Greedy algorithms

A **greedy algorithm** makes, at each step, the choice that looks best at that moment, without reconsidering it later, hoping to reach a globally optimal solution.

## How it works

1. Define a selection criterion (for example, "the most valuable item" or "the activity that ends earliest").
2. Sort or prioritize the candidates by that criterion.
3. Walk through the candidates, accepting each one that keeps the solution feasible.

The strategy only guarantees the optimum when the problem has two properties:

- **Greedy choice**: there is an optimal solution that starts with the locally optimal choice
- **Optimal substructure**: the optimal solution contains optimal solutions to its subproblems

```python
def greedy(items, criteria, is_feasible):
    result = []
    for item in sorted(items, key=criteria):
        if is_feasible(result, item):
            result.append(item)
    return result
```

## Complexity

| Metric | Complexity          |
| :----- | :------------------ |
| Time   | O(n log n) (typical) |
| Space  | O(n)                |

The cost is usually dominated by the initial sort; the selection itself is O(n).

## Implementation

Making change with the fewest coins:

```python
def make_change(amount, coins):
    """Works for canonical coin systems, such as 25, 10, 5 and 1."""
    result = []
    for coin in sorted(coins, reverse=True):
        while amount >= coin:
            result.append(coin)
            amount -= coin
    return result


print(make_change(67, [25, 10, 5, 1]))  # Output: [25, 25, 10, 5, 1, 1]
```

:::warning[Not always optimal]

With coins `[4, 3, 1]` and amount `6`, the greedy strategy returns `[4, 1, 1]` (3 coins), but the optimum is `[3, 3]` (2 coins). In such cases, use dynamic programming.

:::

## Comparison with other paradigms

| Paradigm            | Characteristic                               |
| :------------------ | :------------------------------------------- |
| Greedy              | Local, irreversible choices                  |
| Dynamic programming | Considers every subproblem and memoizes      |
| Backtracking        | Explores solutions and backtracks as needed  |

## Applications

- **Activity selection**: always pick the activity that ends earliest
- **Huffman coding**: shorter codes for the most frequent symbols
- **Fractional knapsack**: take items in decreasing order of value per weight
- **Minimum spanning tree**: Kruskal's and Prim's algorithms
- **Shortest path**: Dijkstra's algorithm

## Pros and cons

### Advantages

- Simple to implement
- Efficient, usually O(n log n)
- Low memory usage

### Disadvantages

- Does not always find the global optimum
- Requires a proof that the greedy choice is correct

## When to use

- When you can prove the local choice leads to the global optimum
- When a fast approximate solution is good enough

## Related

- [Big O notation](../../concepts/big-o-notation.md)
- [Quick Sort](../sorting/quick-sort.md)
- Dynamic programming
