# 🔄 Bubble Sort

## Introdução

O **Bubble Sort** é um algoritmo de ordenação simples baseado em comparações.
Ele percorre a lista diversas vezes, comparando pares de elementos adjacentes e trocando-os de lugar quando estão fora de ordem.  
Esse processo é repetido até que o array esteja totalmente ordenado.

## Complexidade

- **Tempo (pior caso e médio)**: O(n²)
- **Tempo (melhor caso – já ordenado)**: O(n)
- **Espaço**: O(1) — algoritmo in-place

## Como funciona

1. Percorra o array, comparando cada par de elementos adjacentes.
2. Se o elemento atual for maior que o próximo, faça a troca.
3. Ao final de cada passada, o maior elemento "borbulha" para o final da parte não ordenada.
4. Repita o processo, reduzindo a área considerada, até não haver mais trocas.

## Implementação (Python)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        trocou = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                trocou = True
        if not trocou:
            break
```

## Exemplo de uso

```python
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)  # Saída: [11, 12, 22, 25, 34, 64, 90]
```

## Vantagens e desvantagens

### ✅ Vantagens

- Fácil de entender e implementar.
- Não requer memória extra além do array original.
- A versão otimizada consegue detectar se o array já está ordenado.

### ❌ Desvantagens

- Muito lento para listas grandes (O(n²)).
- Pouco utilizado em aplicações reais, servindo mais para fins didáticos.

## Quando usar Bubble Sort

- Para fins educacionais, ao aprender sobre algoritmos de ordenação.
- Em coleções **muito pequenas** ou que já estejam **quase ordenadas**.

## Algoritmos relacionados

- **Selection Sort**: seleciona o menor elemento e o coloca na posição correta.
- **Insertion Sort**: constrói o array ordenado inserindo um elemento por vez.