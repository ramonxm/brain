---
sidebar_label: "Algoritmos Gulosos"
description: "Algoritmos que fazem a melhor escolha local a cada passo."
---

# Algoritmos gulosos

Um **algoritmo guloso** (*greedy*) faz, a cada passo, a escolha que parece melhor naquele momento, sem reconsiderá-la depois, na expectativa de chegar a uma solução globalmente ótima.

## Como funciona

1. Defina um critério de escolha (por exemplo, "o item de maior valor" ou "a atividade que termina mais cedo").
2. Ordene ou priorize os candidatos por esse critério.
3. Percorra os candidatos, aceitando cada um que mantenha a solução viável.

A estratégia só garante o ótimo quando o problema tem duas propriedades:

- **Escolha gulosa**: existe uma solução ótima que começa pela escolha local ótima
- **Subestrutura ótima**: a solução ótima contém soluções ótimas para os subproblemas

```python
def greedy(items, criteria, is_feasible):
    result = []
    for item in sorted(items, key=criteria):
        if is_feasible(result, item):
            result.append(item)
    return result
```

## Complexidade

| Métrica | Complexidade         |
| :------ | :------------------- |
| Tempo   | O(n log n) (típico)  |
| Espaço  | O(n)                 |

O custo costuma ser dominado pela ordenação inicial; a seleção em si é O(n).

## Implementação

Troco com o menor número de moedas:

```python
def make_change(amount, coins):
    """Funciona para sistemas de moedas canônicos, como 25, 10, 5 e 1."""
    result = []
    for coin in sorted(coins, reverse=True):
        while amount >= coin:
            result.append(coin)
            amount -= coin
    return result


print(make_change(67, [25, 10, 5, 1]))  # Saída: [25, 25, 10, 5, 1, 1]
```

:::warning[Nem sempre ótimo]

Com moedas `[4, 3, 1]` e valor `6`, a estratégia gulosa devolve `[4, 1, 1]` (3 moedas), mas o ótimo é `[3, 3]` (2 moedas). Nesses casos, use programação dinâmica.

:::

## Comparação com outros paradigmas

| Paradigma            | Característica                                  |
| :------------------- | :---------------------------------------------- |
| Guloso               | Escolhas locais e irreversíveis                 |
| Programação dinâmica | Considera todos os subproblemas e memoiza       |
| Backtracking         | Explora soluções e volta atrás quando necessário |

## Aplicações

- **Seleção de atividades**: escolher sempre a atividade que termina mais cedo
- **Codificação de Huffman**: códigos menores para os símbolos mais frequentes
- **Mochila fracionária**: pegar itens em ordem decrescente de valor por peso
- **Árvore geradora mínima**: algoritmos de Kruskal e Prim
- **Menor caminho**: algoritmo de Dijkstra

## Vantagens e desvantagens

### Vantagens

- Simples de implementar
- Eficiente, geralmente O(n log n)
- Pouco uso de memória

### Desvantagens

- Nem sempre encontra o ótimo global
- Exige uma prova de que a escolha gulosa é correta

## Quando usar

- Quando é possível provar que a escolha local leva ao ótimo global
- Quando uma solução aproximada e rápida é suficiente

## Relacionados

- [Notação Big O](../../concepts/big-o-notation.md)
- [Quick Sort](../sorting/quick-sort.md)
- Programação dinâmica
