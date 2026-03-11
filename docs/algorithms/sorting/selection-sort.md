# 🔄 Selection Sort

## Introdução

O **Selection Sort** é um algoritmo de ordenação simples baseado em comparações.
Ele percorre o array repetidamente, selecionando o menor (ou maior) elemento da parte não ordenada e movendo-o para a posição correta na parte ordenada.

## Complexidade

- **Tempo (pior e médio caso)**: O(n²)
- **Tempo (melhor caso)**: O(n²)
- **Espaço**: O(1) — algoritmo in-place

## Como funciona

1. Encontre o menor elemento na parte não ordenada do array.
2. Troque esse elemento com o primeiro elemento da parte não ordenada.
3. Avance a fronteira da parte ordenada em uma posição.
4. Repita o processo até que todo o array esteja ordenado.

## Implementação (Python)

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

### ✅ Vantagens

- Fácil de entender e implementar.
- Não requer memória extra (ordenção in-place).
- Tem um número fixo de comparações (independente da entrada estar quase ordenada ou não).

### ❌ Desvantagens

- Muito lento para listas grandes (O(n²)).
- Não é estável por padrão (a ordem relativa de elementos iguais pode mudar).

## Quando usar Selection Sort

- Para fins didáticos, ao comparar diferentes algoritmos de ordenação.
- Em coleções **muito pequenas**, onde a simplicidade é mais importante do que a performance.

## Algoritmos relacionados

- **Bubble Sort**: realiza trocas entre elementos adjacentes.
- **Insertion Sort**: insere cada elemento na posição correta de uma sublista já ordenada.