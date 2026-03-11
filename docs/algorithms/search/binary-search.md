# 🔍 Binary Search (Busca Binária)

## Introdução

A **Busca Binária** é um algoritmo eficiente para encontrar um elemento em um array **ordenado**.
Ela funciona dividindo o array repetidamente ao meio, reduzindo o espaço de busca a cada iteração até encontrar o alvo ou esgotar as possibilidades.

## Complexidade

- **Tempo**: O(log n)
- **Espaço**: O(1) na versão iterativa, O(log n) na versão recursiva

## Como funciona

1. Compare o elemento do meio do array com o alvo.
2. Se forem iguais, o elemento foi encontrado.
3. Se o alvo for menor que o elemento do meio, busque apenas na metade esquerda.
4. Se o alvo for maior, busque apenas na metade direita.
5. Repita o processo até encontrar o elemento ou esvaziar o intervalo de busca.

⚠️ **Importante:** o array **precisa estar ordenado** para que a busca binária funcione corretamente.

## Implementação

### Versão iterativa (Python)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # elemento não encontrado
```

### Versão recursiva (Python)

```python
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
```

## Exemplo de uso

```python
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7

index = binary_search(arr, target)
print(f"Elemento {target} encontrado no índice: {index}")  # Saída: 3
```

## Vantagens e desvantagens

### ✅ Vantagens

- Muito eficiente para arrays grandes.
- Complexidade de tempo O(log n).
- Uso mínimo de memória na versão iterativa.

### ❌ Desvantagens

- Exige que o array esteja previamente ordenado.
- Não é eficiente para estruturas como listas ligadas.
- A versão recursiva consome O(log n) de pilha.