---
sidebar_label: "Roman to Integer"
description: "Converta um número romano em inteiro."
---

# Roman to Integer

Converter um número romano em inteiro percorrendo a string uma única vez e tratando os casos de subtração.

:::info[Fonte]

[LeetCode 13 — Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

:::

## Problema

Dada uma string `s` com um número romano válido, retorne o inteiro correspondente. Os símbolos e seus valores são:

| Símbolo | Valor |
| :-----: | ----: |
| I       | 1     |
| V       | 5     |
| X       | 10    |
| L       | 50    |
| C       | 100   |
| D       | 500   |
| M       | 1000  |

Um símbolo menor antes de um maior indica subtração, apenas nos casos:

- **I** antes de V e X: 4 e 9
- **X** antes de L e C: 40 e 90
- **C** antes de D e M: 400 e 900

## Solução

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
      i++; // o próximo símbolo já foi consumido
    } else {
      result += current;
    }
  }

  return result;
}
```

## Explicação

1. Percorra a string comparando cada símbolo com o seguinte.
2. Se o atual for menor que o próximo, some a diferença entre eles (caso de subtração, como `IV = 4`) e pule o próximo.
3. Caso contrário, some apenas o valor do símbolo atual.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n)         |
| Espaço  | O(1)         |

## Casos de teste

```ts
console.log(romanToInt("III"));      // Saída: 3
console.log(romanToInt("IV"));       // Saída: 4
console.log(romanToInt("IX"));       // Saída: 9
console.log(romanToInt("XL"));       // Saída: 40
console.log(romanToInt("CM"));       // Saída: 900
console.log(romanToInt("LVIII"));    // Saída: 58
console.log(romanToInt("MCMXCIV"));  // Saída: 1994
```

## Relacionados

- [Two Sum](./two-sum.md)
- [Array](../../../data-structures/array.md)
