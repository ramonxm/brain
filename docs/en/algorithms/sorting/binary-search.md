---
sidebar_position: 1
---

# Binary Search (Busca Binária)

A Busca Binária é um algoritmo eficiente para encontrar um elemento em um array ordenado. O algoritmo divide repetidamente o array pela metade, reduzindo o espaço de busca em cada iteração.

## Complexidade

- Tempo: O(log n)
- Espaço: O(1)

## Implementação

```typescript
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

## Exemplo de Uso

```typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(array, target);
console.log(`Elemento ${target} encontrado no índice: ${result}`);
// Saída: Elemento 7 encontrado no índice: 6
```

## Quando Usar

- Quando você precisa buscar um elemento em uma coleção ordenada
- Quando a coleção é grande e você precisa de uma busca eficiente
- Quando o array está ordenado ou pode ser ordenado antes da busca