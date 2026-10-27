---
sidebar_label: "Bubble Sort"
description: "Ordenação por comparação de pares adjacentes, O(n²)."
---

# Bubble Sort

O **Bubble Sort** é um algoritmo de ordenação por comparação que percorre o array várias vezes, trocando pares de elementos adjacentes que estão fora de ordem. A cada passada, o maior elemento restante "borbulha" até o final.

## Como funciona

1. Percorra o array comparando cada par de elementos adjacentes.
2. Se o elemento atual for maior que o próximo, troque-os de lugar.
3. Ao final da passada, o maior elemento estará na última posição da parte não ordenada.
4. Repita, ignorando a parte já ordenada, até uma passada terminar sem trocas.

## Complexidade

| Métrica             | Complexidade |
| :------------------ | :----------- |
| Tempo (melhor caso) | O(n)         |
| Tempo (caso médio)  | O(n²)        |
| Tempo (pior caso)   | O(n²)        |
| Espaço              | O(1)         |

O melhor caso ocorre com o array já ordenado, graças à parada antecipada quando não há trocas. O algoritmo é **estável** e **in-place**.

## Implementação

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
```

## Exemplo de uso

```python
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)  # Saída: [11, 12, 22, 25, 34, 64, 90]
```

## Vantagens e desvantagens

### Vantagens

- Simples de entender e implementar
- Não usa memória extra
- Detecta um array já ordenado em O(n)

### Desvantagens

- Muito lento para arrays grandes
- Raramente usado fora de contextos didáticos

## Quando usar

- Para aprender os fundamentos de ordenação
- Em coleções muito pequenas ou quase ordenadas

## Relacionados

- [Selection Sort](./selection-sort.md)
- [Merge Sort](./merge-sort.md)
- [Swap](../../concepts/swap.md)
- Insertion Sort
