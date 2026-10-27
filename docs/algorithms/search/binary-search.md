---
sidebar_label: "Busca Binária"
description: "Busca em arrays ordenados dividindo o intervalo pela metade, O(log n)."
---

# Busca binária

A **busca binária** (*binary search*) encontra um elemento em um array **ordenado** dividindo o intervalo de busca pela metade a cada passo, até encontrar o alvo ou esgotar o intervalo.

:::warning[Pré-requisito]

O array **precisa estar ordenado**. Em um array desordenado, a busca binária pode não encontrar elementos presentes.

:::

## Como funciona

1. Compare o elemento do meio do intervalo com o alvo.
2. Se forem iguais, retorne a posição do meio.
3. Se o alvo for menor, continue a busca apenas na metade esquerda.
4. Se o alvo for maior, continue a busca apenas na metade direita.
5. Repita até encontrar o alvo ou o intervalo ficar vazio.

## Complexidade

| Métrica             | Complexidade                          |
| :------------------ | :------------------------------------ |
| Tempo (melhor caso) | O(1)                                  |
| Tempo (caso médio)  | O(log n)                              |
| Tempo (pior caso)   | O(log n)                              |
| Espaço              | O(1) iterativa, O(log n) recursiva    |

## Implementação

### Iterativa

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # não encontrado
```

### Recursiva

```python
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    if arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    return binary_search_recursive(arr, target, left, mid - 1)
```

## Exemplo de uso

```python
arr = [1, 3, 5, 7, 9, 11, 13, 15]

print(binary_search(arr, 7))   # Saída: 3
print(binary_search(arr, 4))   # Saída: -1
```

## Vantagens e desvantagens

### Vantagens

- Muito eficiente em arrays grandes
- Versão iterativa não usa memória extra

### Desvantagens

- Exige dados ordenados
- Exige acesso por índice em O(1), o que não funciona bem em listas ligadas
- A versão recursiva consome O(log n) de pilha

## Quando usar

- Para buscas repetidas em uma coleção ordenada e grande
- Para encontrar limites em espaços de busca monotônicos (por exemplo, o menor valor que satisfaz uma condição)

## Relacionados

- [Array](../../data-structures/array.md)
- [Notação Big O](../../concepts/big-o-notation.md)
- [Árvore binária](../../data-structures/binary-tree.md)
