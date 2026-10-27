---
sidebar_label: "Roman to Integer"
description: "Convert a Roman numeral to an integer."
---

# Roman to Integer

Converting a Roman numeral to an integer by walking the string once and handling the subtraction cases.

:::info[Source]

[LeetCode 13 — Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

:::

## Problem

Given a string `s` holding a valid Roman numeral, return the corresponding integer. The symbols and their values are:

| Symbol | Value |
| :----: | ----: |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

A smaller symbol before a larger one means subtraction, only in these cases:

- **I** before V and X: 4 and 9
- **X** before L and C: 40 and 90
- **C** before D and M: 400 and 900

## Solution

```ts
const VALUES: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = VALUES[s[i]];
    const next = i + 1 < s.length ? VALUES[s[i + 1]] : 0;

    if (current < next) {
      result += next - current;
      i++; // the next symbol has already been consumed
    } else {
      result += current;
    }
  }

  return result;
}
```

## Explanation

1. Walk through the string comparing each symbol with the next one.
2. If the current one is smaller than the next, add their difference (subtraction case, such as `IV = 4`) and skip the next one.
3. Otherwise, add only the current symbol's value.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(n)       |
| Space  | O(1)       |

## Test cases

```ts
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("IV"));       // Output: 4
console.log(romanToInt("IX"));       // Output: 9
console.log(romanToInt("XL"));       // Output: 40
console.log(romanToInt("CM"));       // Output: 900
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
```

## Related

- [Two Sum](./two-sum.md)
- [Array](../../../data-structures/array.md)
