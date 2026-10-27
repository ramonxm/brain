---
sidebar_label: "Two Sum"
description: "Find two indices whose values add up to the target, in O(n) with a hash map."
---

# Two Sum

Finding two elements of an array that add up to a target value, using a hash map to solve it in a single pass.

:::info[Source]

[LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)

:::

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers in `nums` that add up to `target`. Each input has exactly one solution, and the same element may not be used twice.

## Solution

```ts
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}
```

## Explanation

1. For each number, compute the complement still needed to reach the target (`target - nums[i]`).
2. If the complement has already been seen, the two indices are the answer.
3. Otherwise, store the current number and its index in the hash map.

Brute force compares every pair in O(n²); the hash map trades that cost for O(n) memory.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n)       |
| Space  | O(n)       |

## Test cases

```ts
console.log(twoSum([2, 7, 11, 15], 9));          // Output: [0, 1]
console.log(twoSum([-1, -2, -3, -4, -5], -8));   // Output: [2, 4]
console.log(twoSum([3, 3], 6));                  // Output: [0, 1]
```

## Related

- [Array](../../../data-structures/array.md)
- [Big O notation](../../../concepts/big-o-notation.md)
