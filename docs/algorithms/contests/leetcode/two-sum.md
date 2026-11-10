---
sidebar_label: "Two Sum"
sidebar_position: 1
description: "Encontre dois índices cujos valores somam o alvo, em O(n) com hash map."
---

# Two Sum

Encontrar dois elementos de um array que somam um valor alvo, usando um hash map para resolver em uma única passada.

:::info[Fonte]

[LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)

:::

## Problema

Dado um array de inteiros `nums` e um inteiro `target`, retorne os índices dos dois números de `nums` cuja soma é `target`. Cada entrada tem exatamente uma solução, e o mesmo elemento não pode ser usado duas vezes.

## Insight-chave

Para cada número, a pergunta "o complemento dele já apareceu?" é uma busca. Um hash map de valor → índice responde em O(1), trocando O(n²) de tempo por O(n) de memória.

## Solução

```ts
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // valor -> índice

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

## Explicação

1. Para cada número, calcule o complemento que falta para atingir o alvo (`target - nums[i]`).
2. Se o complemento já foi visto, os índices dos dois formam a resposta.
3. Caso contrário, guarde o número atual e seu índice no hash map.

A força bruta compara todos os pares em O(n²); o hash map troca esse custo por O(n) de memória.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n)         |
| Espaço  | O(n)         |

## Casos de teste

```ts
console.log(twoSum([2, 7, 11, 15], 9));          // Saída: [0, 1]
console.log(twoSum([-1, -2, -3, -4, -5], -8));   // Saída: [2, 4]
console.log(twoSum([3, 3], 6));                  // Saída: [0, 1]
```

## Como reconhecer o padrão

- O problema pede um par que satisfaz uma relação (`a + b = alvo`, `a − b = k`)
- A força bruta compara todos os pares em O(n²)
- Dado um elemento, dá para calcular exatamente o que se procura

Padrão: [Hash map como índice](../../patterns/hash-map-lookup.md).

## Relacionados

- [Array](../../../data-structures/array.md)
- [Notação Big O](../../../concepts/big-o-notation.md)
