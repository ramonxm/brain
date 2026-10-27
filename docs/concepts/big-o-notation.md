---
sidebar_label: "Notação Big O"
description: "Como medir o crescimento do tempo e da memória de um algoritmo conforme a entrada aumenta."
---

# Notação Big O

A **notação Big O** descreve como o tempo de execução ou o uso de memória de um algoritmo cresce conforme o tamanho da entrada (`n`) aumenta. Ela não mede o tempo real em segundos, e sim a **taxa de crescimento** no pior caso.

## Como funciona

1. Conte as operações executadas em função de `n`.
2. Mantenha apenas o termo que cresce mais rápido.
3. Descarte as constantes multiplicativas.

Por exemplo, um algoritmo que executa `3n² + 5n + 2` operações é **O(n²)**: para entradas grandes, o termo `n²` domina os demais.

```python
def has_duplicates(items):
    for i in range(len(items)):          # n iterações
        for j in range(i + 1, len(items)):  # até n iterações
            if items[i] == items[j]:
                return True
    return False
# Dois laços aninhados sobre n elementos: O(n²)
```

## Principais complexidades

| Complexidade | Nome        | Crescimento                    | Exemplo                               |
| :----------- | :---------- | :----------------------------- | :------------------------------------ |
| O(1)         | Constante   | Não depende de n               | Acessar um array por índice           |
| O(log n)     | Logarítmica | Reduz o problema pela metade   | Busca binária                         |
| O(n)         | Linear      | Proporcional a n               | Percorrer uma lista                   |
| O(n log n)   | Quasilinear | Entre linear e quadrática      | Merge Sort, Quick Sort (caso médio)   |
| O(n²)        | Quadrática  | Compara cada par de elementos  | Bubble Sort, Selection Sort           |
| O(2ⁿ)        | Exponencial | Dobra a cada novo elemento     | Gerar todos os subconjuntos           |
| O(n!)        | Fatorial    | Testa todas as permutações     | Caixeiro viajante por força bruta     |

Da mais eficiente para a menos eficiente:

```text
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
```

O(2ⁿ) e O(n!) se tornam impraticáveis mesmo para entradas pequenas: com `n = 20`, O(2ⁿ) já passa de um milhão de operações e O(n!) passa de 10¹⁸.

## Aplicações

- Comparar soluções antes de implementá-las
- Escolher a estrutura de dados adequada a cada operação
- Prever se um algoritmo vai escalar para entradas grandes

## Quando usar

- Ao decidir entre duas abordagens para o mesmo problema
- Ao avaliar se uma solução cabe nos limites de tempo de um problema de competição

:::tip[Como memorizar]

O(1): acesso direto · O(log n): dividir pela metade · O(n): um laço · O(n log n): dividir e conquistar · O(n²): dois laços aninhados · O(2ⁿ): todas as combinações · O(n!): todas as ordens

:::

## Relacionados

- [Busca binária](../algorithms/search/binary-search.md)
- [Merge Sort](../algorithms/sorting/merge-sort.md)
- [Estruturas de dados](../data-structures/index.md)
