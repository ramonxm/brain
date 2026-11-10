---
sidebar_label: "Single Number"
sidebar_position: 2
description: "Encontre o elemento que aparece uma única vez usando XOR."
---

# Single Number

Encontrar o único elemento sem par em um array, em tempo linear e memória constante, usando o operador XOR.

:::info[Fonte]

[LeetCode 136 — Single Number](https://leetcode.com/problems/single-number/)

:::

## Problema

Dado um array não vazio de inteiros `nums` em que todos os elementos aparecem duas vezes, exceto um, encontre esse elemento. A solução deve ter tempo O(n) e usar apenas O(1) de espaço extra.

## Insight-chave

XOR anula pares (`x ^ x = 0`) e não depende da ordem. Acumular o XOR de todos os elementos deixa apenas o que não tem par.

## Solução

```ts
function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
```

## Explicação

A solução usa três propriedades do XOR (`^`):

- **Auto-anulação**: `x ^ x = 0`
- **Elemento neutro**: `x ^ 0 = x`
- **Comutatividade e associatividade**: a ordem das operações não altera o resultado

Ao aplicar XOR em todos os elementos, cada par se anula e sobra apenas o número que aparece uma vez.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n)         |
| Espaço  | O(1)         |

## Casos de teste

```ts
console.log(singleNumber([2, 2, 1]));        // Saída: 1
console.log(singleNumber([4, 1, 2, 1, 2]));  // Saída: 4
console.log(singleNumber([1]));              // Saída: 1
console.log(singleNumber([-1, -1, -2]));     // Saída: -2
```

## Como reconhecer o padrão

- Todos os elementos aparecem em pares, exceto um
- O enunciado exige O(1) de memória extra, o que descarta um hash set
- Pares que se cancelam sugerem uma operação que é sua própria inversa

## Relacionados

- [Two Sum](./two-sum.md)
- [Notação Big O](../../../concepts/big-o-notation.md)
