---
sidebar_label: "Lista Ligada"
description: "Sequência de nós em que cada nó aponta para o próximo."
---

# Lista ligada

Uma **lista ligada** (*linked list*) é uma estrutura linear formada por nós, em que cada nó guarda um valor e uma referência para o próximo. Diferente do [array](./array.md), os nós não precisam estar em posições contíguas de memória.

## Como funciona

- **Lista simplesmente ligada**: cada nó aponta para o próximo
- **Lista duplamente ligada**: cada nó aponta para o próximo e para o anterior
- **Lista circular**: o último nó aponta de volta para o primeiro

A lista mantém uma referência para o primeiro nó, a **cabeça** (*head*). Para chegar a qualquer outro nó, é preciso percorrer a lista a partir dela.

## Complexidade

| Operação                         | Complexidade |
| :------------------------------- | :----------- |
| Acesso por posição               | O(n)         |
| Busca por valor                  | O(n)         |
| Inserção/remoção na cabeça       | O(1)         |
| Inserção/remoção após nó conhecido | O(1)       |
| Inserção no final (sem ponteiro de cauda) | O(n) |

## Implementação

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def prepend(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node

    def append(self, data):
        node = Node(data)
        if not self.head:
            self.head = node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = node

    def __str__(self):
        values, current = [], self.head
        while current:
            values.append(str(current.data))
            current = current.next
        return " -> ".join(values)


linked = LinkedList()
linked.append(20)
linked.append(30)
linked.prepend(10)
print(linked)  # Saída: 10 -> 20 -> 30
```

## Aplicações

- Implementação de pilhas, filas e deques
- Listas de adjacência em grafos
- Histórico de desfazer/refazer
- Caches LRU (lista duplamente ligada + tabela hash)

## Vantagens e desvantagens

### Vantagens

- Inserção e remoção O(1) em posições conhecidas
- Tamanho cresce e diminui sem realocação

### Desvantagens

- Sem acesso direto por índice
- Memória extra para os ponteiros
- Pior aproveitamento de cache que arrays

## Quando usar

- Quando há muitas inserções e remoções no início ou no meio
- Quando o tamanho da coleção muda com frequência

## Relacionados

- [Array](./array.md)
- [Sort List](../algorithms/contests/leetcode/sort-list.md)
