---
sidebar_label: "Quick Sort"
description: "Ordenação in-place por particionamento em torno de um pivô, O(n log n) em média."
---

# Quick Sort

O **Quick Sort** é um algoritmo de ordenação por **divisão e conquista** que escolhe um elemento como **pivô** e particiona o array ao redor dele: menores à esquerda, maiores à direita. Em seguida, ordena cada lado recursivamente.

## Como funciona

1. Escolha um pivô (nesta implementação, o último elemento).
2. Particione o array de modo que os elementos menores ou iguais ao pivô fiquem à esquerda e os maiores, à direita.
3. Coloque o pivô entre as duas partes, na sua posição final.
4. Aplique o mesmo processo recursivamente à parte esquerda e à parte direita.

## Complexidade

| Métrica             | Complexidade |
| :------------------ | :----------- |
| Tempo (melhor caso) | O(n log n)   |
| Tempo (caso médio)  | O(n log n)   |
| Tempo (pior caso)   | O(n²)        |
| Espaço              | O(log n)     |

O pior caso acontece quando o pivô é sempre o menor ou o maior elemento (por exemplo, com o último elemento como pivô em um array já ordenado). O algoritmo é **in-place**, mas **não é estável**.

## Implementação

```ts
function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Coloca o pivô na posição final
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
```

## Exemplo de uso

```ts
const sorted = quickSort([10, 7, 8, 9, 1, 5]);
console.log(sorted); // Saída: [1, 5, 7, 8, 9, 10]
```

## Vantagens e desvantagens

### Vantagens

- Muito rápido na prática, com constantes baixas
- In-place, usa pouca memória
- Bom aproveitamento de cache

### Desvantagens

- O(n²) no pior caso
- Não é estável
- O desempenho depende da escolha do pivô

:::tip[Evitando o pior caso]

Escolher o pivô aleatoriamente ou pela mediana de três elementos (início, meio e fim) torna o pior caso muito improvável.

:::

## Quando usar

- Para ordenar arrays grandes em memória
- Quando memória extra é uma restrição
- Quando a estabilidade não é necessária

## Relacionados

- [Merge Sort](./merge-sort.md)
- [Selection Sort](./selection-sort.md)
- [Swap](../../concepts/swap.md)
