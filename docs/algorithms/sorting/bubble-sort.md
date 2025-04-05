---
sidebar_position: 2
---

# Bubble Sort

O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada. O processo é repetido até que nenhuma troca seja necessária.

## Complexidade

- Tempo: O(n²)
- Espaço: O(1)

## Implementação

```typescript
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}
```

## Exemplo de Uso

```typescript
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Array original:', array);

const sortedArray = bubbleSort(array);
console.log('Array ordenado:', sortedArray);
// Saída: Array ordenado: [11, 12, 22, 25, 34, 64, 90]
```

## Quando Usar

- Para fins educacionais e compreensão de algoritmos de ordenação
- Em conjuntos de dados muito pequenos
- Quando a implementação simples é mais importante que a eficiência
- Quando o espaço de memória é uma preocupação (ordenação in-place)

## Vantagens e Desvantagens

### Vantagens
- Fácil de entender e implementar
- Requer pouca memória adicional
- Detecta se a lista já está ordenada

### Desvantagens
- Ineficiente para grandes conjuntos de dados
- Complexidade de tempo quadrática O(n²)
- Não é adequado para uso em produção com grandes volumes de dados