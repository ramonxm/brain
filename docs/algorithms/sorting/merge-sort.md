---
sidebar_label: "Merge Sort"
description: "Ordenação estável por divisão e conquista, O(n log n)."
---

# Merge Sort

O **Merge Sort** é um algoritmo de ordenação por **divisão e conquista**: divide o array em duas metades, ordena cada uma recursivamente e depois intercala (*merge*) as duas metades ordenadas.

## Como funciona

1. Se o array tiver 0 ou 1 elemento, ele já está ordenado.
2. Divida o array em duas metades.
3. Ordene cada metade recursivamente.
4. Intercale as duas metades, comparando seus primeiros elementos e copiando sempre o menor.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n log n)   |
| Espaço  | O(n)         |

O array é dividido log n vezes, e cada nível de recursão faz O(n) trabalho na intercalação. O algoritmo é **estável**, mas **não é in-place**.

## Implementação

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    // <= mantém a ordem relativa de elementos iguais (estabilidade)
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}
```

## Exemplo de uso

```ts
const sorted = mergeSort([38, 27, 43, 3, 9, 82, 10]);
console.log(sorted); // Saída: [3, 9, 10, 27, 38, 43, 82]
```

## Vantagens e desvantagens

### Vantagens

- O(n log n) garantido em todos os casos
- Estável
- Ótimo para listas ligadas e para ordenar dados que não cabem na memória (*external sorting*)

### Desvantagens

- Usa O(n) de memória extra
- Mais lento que algoritmos simples em arrays pequenos

## Quando usar

- Quando a ordenação precisa ser estável
- Quando o desempenho no pior caso importa
- Para ordenar [listas ligadas](../../data-structures/linked-list.md)

## Relacionados

- [Quick Sort](./quick-sort.md)
- [Sort List](../contests/leetcode/sort-list.md)
- [Notação Big O](../../concepts/big-o-notation.md)
