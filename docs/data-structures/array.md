---
sidebar_label: "Array"
description: "Sequência de elementos armazenados em posições contíguas de memória, com acesso O(1) por índice."
---

# Array

Um **array** (ou vetor) armazena uma sequência de elementos do mesmo tipo em posições **contíguas** de memória. Como a posição de cada elemento pode ser calculada a partir do índice, o acesso é imediato.

## Como funciona

- **Indexado**: o elemento `i` fica no endereço `início + i × tamanho_do_elemento`
- **Tamanho fixo**: definido na criação, na maioria das linguagens de baixo nível
- **Homogêneo**: todos os elementos têm o mesmo tipo

Arrays dinâmicos (`list` em Python, `vector` em C++, `Array` em JavaScript) dobram a capacidade quando ficam cheios, o que torna a inserção no final O(1) amortizado.

## Complexidade

| Operação                  | Complexidade      |
| :------------------------ | :---------------- |
| Acesso por índice         | O(1)              |
| Atualização por índice    | O(1)              |
| Busca por valor           | O(n)              |
| Inserção no final         | O(1) amortizado   |
| Inserção/remoção no meio  | O(n)              |

## Implementação

```python
arr = [10, 20, 30, 40, 50]

print(arr[2])  # Saída: 30

arr[1] = 25
print(arr)  # Saída: [10, 25, 30, 40, 50]

if 40 in arr:  # busca linear
    print("Encontrado")

arr.append(60)  # insere no final
arr.remove(30)  # remove por valor, deslocando os seguintes
print(arr)  # Saída: [10, 25, 40, 50, 60]
```

## Aplicações

- Coleções com acesso frequente por posição
- Base para outras estruturas (pilhas, filas, heaps, tabelas hash)
- Matrizes e buffers

## Vantagens e desvantagens

### Vantagens

- Acesso O(1) por índice
- Ótimo aproveitamento de cache, pela memória contígua
- Sem custo extra de memória por elemento

### Desvantagens

- Tamanho fixo em arrays estáticos
- Inserções e remoções no meio custam O(n)
- Todos os elementos precisam ter o mesmo tipo (em linguagens tipadas)

## Quando usar

- Quando o número de elementos é conhecido ou muda pouco
- Quando o acesso por índice é a operação mais frequente

## Relacionados

- [Lista ligada](./linked-list.md)
- [Pilha (stack)](./stack.md)
- [Busca binária](../algorithms/search/binary-search.md)
