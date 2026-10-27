---
sidebar_label: "FIFO"
description: "First In, First Out: o primeiro elemento a entrar é o primeiro a sair."
---

# FIFO (First In, First Out)

**FIFO** ("primeiro a entrar, primeiro a sair") é a política em que os elementos são removidos na mesma ordem em que foram inseridos, como em uma fila de supermercado: quem chega primeiro é atendido primeiro.

## Como funciona

A estrutura que implementa FIFO é a [fila (*queue*)](../data-structures/queue.md), com duas operações:

- **Enqueue**: adiciona um elemento ao final
- **Dequeue**: remove o elemento do início

## Complexidade

| Operação | Complexidade |
| :------- | :----------- |
| Enqueue  | O(1)         |
| Dequeue  | O(1)         |

## Implementação

```python
from collections import deque


class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        return self.items.popleft() if self.items else None

    def is_empty(self):
        return len(self.items) == 0


queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.dequeue())  # Saída: 1
print(queue.dequeue())  # Saída: 2
```

:::warning[Cuidado com listas]

Em Python, `list.pop(0)` é O(n), pois desloca todos os elementos. Use `collections.deque` para obter O(1) nas duas pontas.

:::

## Aplicações

- Filas de impressão e de tarefas
- Escalonamento de processos
- Buffers de rede e de I/O
- [Busca em largura (BFS)](../algorithms/graph/breadth-first-search.md)

## Relacionados

- [LIFO](./lifo.md)
- [Fila (queue)](../data-structures/queue.md)
