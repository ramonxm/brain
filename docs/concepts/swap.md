---
sidebar_label: "Swap"
description: "Troca de valores entre duas variáveis ou posições de um array."
---

# Swap

**Swap** é a operação de trocar os valores de duas variáveis (ou de duas posições de um array): depois da troca, cada uma guarda o valor que estava na outra. É a base de algoritmos de ordenação como Bubble Sort, Selection Sort e Quick Sort.

## Como funciona

### Com variável temporária

A forma clássica usa uma terceira variável para não perder um dos valores durante a troca.

```python
a, b = 5, 10

temp = a
a = b
b = temp

print(a, b)  # Saída: 10 5
```

### Com atribuição múltipla

Muitas linguagens trocam valores diretamente por atribuição múltipla (ou desestruturação), sem variável temporária explícita.

```python
a, b = b, a
```

```ts
[a, b] = [b, a];
```

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(1)         |
| Espaço  | O(1)         |

## Implementação

Inverter um array com dois índices que caminham das pontas para o centro, trocando cada par de elementos:

```ts
function reverse(array: number[]): number[] {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array;
}

console.log(reverse([10, 30, 40, 55])); // Saída: [55, 40, 30, 10]
```

## Aplicações

- Algoritmos de ordenação baseados em comparação
- Inversão e rotação de arrays
- Embaralhamento (algoritmo de Fisher–Yates)

## Relacionados

- [Bubble Sort](../algorithms/sorting/bubble-sort.md)
- [Selection Sort](../algorithms/sorting/selection-sort.md)
- [Quick Sort](../algorithms/sorting/quick-sort.md)
