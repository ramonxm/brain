---
sidebar_label: "Selection Sort"
description: "Ordenação que seleciona o menor elemento a cada passada, O(n²)."
---

# Selection Sort

O **Selection Sort** é um algoritmo de ordenação por comparação que, a cada passada, seleciona o menor elemento da parte não ordenada e o coloca na posição correta.

## Como funciona

1. Encontre o menor elemento da parte não ordenada do array.
2. Troque-o com o primeiro elemento da parte não ordenada.
3. Avance a fronteira da parte ordenada em uma posição.
4. Repita até que todo o array esteja ordenado.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n²)        |
| Espaço  | O(1)         |

O número de comparações é sempre o mesmo, independentemente da entrada, por isso os três casos são O(n²). O algoritmo é **in-place**, mas **não é estável**.

## Implementação

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
```

## Exemplo de uso

```python
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)  # Saída: [11, 12, 22, 25, 64]
```

## Vantagens e desvantagens

### Vantagens

- Simples de entender e implementar
- Não usa memória extra
- Faz no máximo n − 1 trocas, útil quando escrever na memória é caro

### Desvantagens

- Muito lento para arrays grandes
- Não aproveita arrays quase ordenados
- Não é estável

## Quando usar

- Para fins didáticos, comparando algoritmos de ordenação
- Em coleções muito pequenas, onde a simplicidade importa mais que o desempenho

## Relacionados

- [Bubble Sort](./bubble-sort.md)
- [Quick Sort](./quick-sort.md)
- [Swap](../../concepts/swap.md)
- Insertion Sort
