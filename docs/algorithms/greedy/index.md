---
id: greedy-index
slug: /algorithms/greedy/index
---

# 🔧 Algoritmos Gulosos (Greedy Algorithms)

## Introdução

**Algoritmos gulosos** fazem, em cada passo, a escolha localmente ótima com a esperança de chegar a uma solução globalmente ótima.
Em outras palavras, o algoritmo sempre pega a melhor opção disponível naquele momento, sem “olhar muito para frente”.

## Características

### ✅ Propriedades de algoritmos gulosos

1. **Escolha gulosa (greedy choice)**: em cada etapa, escolhe-se o que parece melhor naquele instante.
2. **Subestrutura ótima**: a solução ótima do problema contém soluções ótimas para subproblemas.
3. **Irreversibilidade**: uma vez feita, a escolha não é desfeita depois.

### 🎯 Quando usar

- Problemas de **otimização**, em que escolhas locais podem levar a uma solução global ótima.
- Quando é possível **provar** que a estratégia gulosa é correta.
- Problemas que apresentam claramente a **propriedade da escolha gulosa**.

## Algoritmos gulosos clássicos

### 1. Activity Selection Problem

- **Objetivo**: selecionar o maior número de atividades que não se sobrepõem.
- **Estratégia gulosa**: sempre escolher a atividade que termina mais cedo.

### 2. Huffman Coding

- **Objetivo**: comprimir dados usando códigos de tamanho variável.
- **Estratégia gulosa**: atribuir códigos menores para caracteres mais frequentes.

### 3. Fractional Knapsack Problem

- **Objetivo**: maximizar o valor da mochila permitindo frações de itens.
- **Estratégia gulosa**: ordenar por valor/peso e pegar os itens nessa ordem.

## Estrutura geral

```python
def greedy_algorithm(items):
    # 1. Ordena os itens de acordo com algum critério guloso
    items.sort(key=greedy_criteria)

    result = []

    # 2. Para cada item, toma a decisão gulosa se for viável
    for item in items:
        if is_feasible(item, result):
            result.append(item)

    return result
```

## Vantagens e desvantagens

### ✅ Vantagens

- **Simples de implementar**: lógica direta e intuitiva.
- **Eficiente**: muitas vezes tem baixa complexidade de tempo.
- **Pouco uso de memória**: não precisa guardar muitas soluções intermediárias.

### ❌ Desvantagens

- **Nem sempre encontra o ótimo global**: pode ficar preso em ótimos locais.
- **Prova de correção difícil**: é necessário provar que a estratégia gulosa funciona.
- **Limitado a alguns tipos de problema**: não é aplicável a qualquer situação.

## Diferenças para outros paradigmas

| Paradigma               | Características                              |
|-------------------------|----------------------------------------------|
| **Guloso (Greedy)**     | Escolhas locais e irreversíveis              |
| **Programação Dinâmica**| Considera todas as possibilidades, memoiza   |
| **Backtracking**        | Explora muitas soluções, pode voltar atrás   |

## Exemplo simples: troco com moedas

```python
def make_change(amount, coins):
    """
    Retorna uma lista de moedas que somam `amount`
    (funciona bem para sistemas de moedas canônicos).
    """
    coins.sort(reverse=True)  # Da maior para a menor
    result = []

    for coin in coins:
        while amount >= coin:
            result.append(coin)
            amount -= coin

    return result

# Exemplo
coins = [25, 10, 5, 1]
amount = 67
print(make_change(amount, coins))  # [25, 25, 10, 5, 1, 1]
```

## 🎯 Dicas para resolver problemas gulosos

1. **Identifique a escolha gulosa**: qual critério usar para ordenar/escolher?
2. **Tente provar a correção**: mostre que escolhas locais levam à solução ótima.
3. **Implemente**: geralmente envolve ordenar e depois percorrer sequencialmente.
4. **Teste com exemplos edge cases**: para garantir que não há contraexemplos óbvios.