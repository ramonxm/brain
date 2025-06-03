---
id: greedy-index
title: Greedy Algorithms
slug: /algorithms/greedy/index
---

# 🔧 Greedy Algorithms

## Introduction

**Greedy Algorithms** make the locally optimal choice at each step with the hope of finding a global optimum. At every stage, the algorithm picks the best available option without considering future consequences.

## Characteristics

### ✅ Properties of Greedy Algorithms

1. **Greedy Choice**: At each step, make the choice that looks best at the moment
2. **Optimal Substructure**: The optimal solution contains optimal solutions to subproblems
3. **Irreversibility**: Choices made cannot be undone

### 🎯 When to Use
- Optimization problems where local choices lead to a global optimum
- When you can prove the greedy strategy works
- Problems with the greedy-choice property

## Classic Greedy Algorithms

### 1. Activity Selection Problem
**Goal**: Select the maximum number of non-overlapping activities

**Strategy**: Always pick the activity that finishes earliest

### 2. Huffman Coding
**Goal**: Compress data using variable-length codes

**Strategy**: Assign shorter codes to more frequent characters

### 3. Fractional Knapsack Problem
**Goal**: Maximize value in the knapsack allowing fractions of items

**Strategy**: Sort by value/weight and take items in order

## General Structure

```python
def greedy_algorithm(items):
    # 1. Sort items based on the greedy criterion
    items.sort(key=greedy_criteria)
    
    result = []
    
    # 2. For each item, make the greedy choice
    for item in items:
        if is_feasible(item, result):
            result.append(item)
    
    return result
```

## Advantages and Disadvantages

### ✅ Advantages
- **Simple to implement**: Straightforward and intuitive logic
- **Efficient**: Usually low complexity
- **Low memory usage**: Doesn't need to store many solutions

### ❌ Disadvantages
- **Doesn't always find the global optimum**: Can get stuck in local optima
- **Hard to prove correctness**: You must prove the greedy strategy works
- **Limited to specific problems**: Doesn't work for all problem types

## Differences from Other Paradigms

| Paradigm              | Characteristics                        |
|----------------------|-----------------------------------------|
| **Greedy**           | Local, irreversible choices             |
| **Dynamic Programming** | Considers all possibilities, memoization |
| **Backtracking**     | Explores all solutions, can backtrack   |

## Simple Example: Change Making

```python
def make_change(amount, coins):
    """
    Returns the minimum number of coins to make change
    (works only for canonical coin systems)
    """
    coins.sort(reverse=True)  # Largest to smallest
    result = []
    
    for coin in coins:
        while amount >= coin:
            result.append(coin)
            amount -= coin
    
    return result

# Example
coins = [25, 10, 5, 1]
amount = 67
print(make_change(amount, coins))  # [25, 25, 10, 5, 1, 1]
```

## 🎯 Tips for Solving Greedy Problems

1. **Identify the greedy choice**: What criterion to use for ordering/choosing?
2. **Prove it works**: Show that local choices lead to a global optimum
3. **Implement**: Sort elements and make sequential choices
4. **Test**: Check with examples if the solution is correct 