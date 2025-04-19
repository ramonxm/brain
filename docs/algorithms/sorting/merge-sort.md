---
sidebar_position: 3
---

# Merge Sort

O Merge Sort é um algoritmo de ordenação eficiente que utiliza a técnica de dividir e conquistar. Ele divide o array em duas metades, ordena cada metade recursivamente e depois combina as duas metades ordenadas.

## Complexidade

- Tempo: O(n log n)
- Espaço: O(n)

## Implementação

```typescript
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
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

## Exemplo de Uso

```typescript
const array = [38, 27, 43, 3, 9, 82, 10];
console.log('Array original:', array);

const sortedArray = mergeSort(array);
console.log('Array ordenado:', sortedArray);
// Saída: Array ordenado: [3, 9, 10, 27, 38, 43, 82]
```

## Quando Usar

- Quando você precisa de um algoritmo de ordenação estável
- Quando a complexidade de tempo garantida O(n log n) é importante
- Quando você tem memória suficiente disponível
- Em grandes conjuntos de dados onde a eficiência é crucial

## Vantagens e Desvantagens

### Vantagens
- Tempo de execução garantido O(n log n)
- Estável (mantém a ordem relativa de elementos iguais)
- Bom para ordenar linked lists

### Desvantagens
- Requer espaço adicional O(n)
- Para arrays pequenos, pode ser mais lento que algoritmos mais simples
- Complexidade de implementação maior que algoritmos básicos