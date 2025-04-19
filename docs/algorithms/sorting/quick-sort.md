---
sidebar_position: 4
---

# Quick Sort

O Quick Sort é um algoritmo de ordenação eficiente que utiliza a estratégia de dividir e conquistar. Ele escolhe um elemento como pivô e particiona o array ao redor do pivô, colocando elementos menores à esquerda e maiores à direita.

## Complexidade

- Tempo Médio: O(n log n)
- Tempo Pior Caso: O(n²)
- Espaço: O(log n)

## Implementação

```typescript
function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): number[] {
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
            // Troca elementos
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Coloca o pivô na posição correta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
```

## Exemplo de Uso

```typescript
const array = [10, 7, 8, 9, 1, 5];
console.log('Array original:', array);

const sortedArray = quickSort(array);
console.log('Array ordenado:', sortedArray);
// Saída: Array ordenado: [1, 5, 7, 8, 9, 10]
```

## Quando Usar

- Quando você precisa de um algoritmo de ordenação eficiente in-place
- Em grandes conjuntos de dados
- Quando o espaço de memória é uma preocupação
- Quando você precisa de bom desempenho no caso médio

## Vantagens e Desvantagens

### Vantagens
- Eficiente na prática
- Usa pouca memória (ordenação in-place)
- Bom desempenho em cache devido à localidade de referência
- Pode ser facilmente modificado para diferentes tipos de dados

### Desvantagens
- Não é estável (pode alterar a ordem relativa de elementos iguais)
- Desempenho O(n²) no pior caso
- A escolha do pivô pode afetar significativamente o desempenho
- Não é adequado para arrays muito pequenos