---
sidebar_label: "Single Number"
description: "Find the element that appears only once using XOR."
---

# Single Number

Finding the only unpaired element of an array, in linear time and constant memory, using the XOR operator.

:::info[Source]

[LeetCode 136 — Single Number](https://leetcode.com/problems/single-number/)

:::

## Problem

Given a non-empty array of integers `nums` where every element appears twice except one, find that element. The solution must run in O(n) time and use only O(1) extra space.

## Solution

```ts
function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
```

## Explanation

The solution relies on three properties of XOR (`^`):

- **Self-inverse**: `x ^ x = 0`
- **Identity**: `x ^ 0 = x`
- **Commutativity and associativity**: the order of operations does not change the result

XOR-ing every element cancels out each pair, leaving only the number that appears once.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n)       |
| Space  | O(1)       |

## Test cases

```ts
console.log(singleNumber([2, 2, 1]));        // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2]));  // Output: 4
console.log(singleNumber([1]));              // Output: 1
console.log(singleNumber([-1, -1, -2]));     // Output: -2
```

## Related

- [Two Sum](./two-sum.md)
- [Big O notation](../../../concepts/big-o-notation.md)
