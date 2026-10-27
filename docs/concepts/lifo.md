---
sidebar_label: "LIFO"
description: "Last In, First Out: o último elemento a entrar é o primeiro a sair."
---

# LIFO (Last In, First Out)

**LIFO** ("último a entrar, primeiro a sair") é a política em que o elemento removido é sempre o mais recente, como em uma pilha de pratos: o último colocado no topo é o primeiro a ser retirado.

## Como funciona

A estrutura que implementa LIFO é a [pilha (*stack*)](../data-structures/stack.md). Inserções e remoções acontecem em uma única extremidade, o **topo**:

- **Push**: adiciona um elemento ao topo
- **Pop**: remove o elemento do topo

## Complexidade

| Operação | Complexidade |
| :------- | :----------- |
| Push     | O(1)         |
| Pop      | O(1)         |

## Implementação

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop() if self.items else None

    def is_empty(self):
        return len(self.items) == 0


stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print(stack.pop())  # Saída: 3
print(stack.pop())  # Saída: 2
```

## Aplicações

- Pilha de chamadas de função (*call stack*)
- Desfazer/refazer em editores
- Avaliação de expressões e verificação de parênteses
- Busca em profundidade (DFS)

## Relacionados

- [FIFO](./fifo.md)
- [Pilha (stack)](../data-structures/stack.md)
- [Memória stack e heap](./memory-stack-heap.md)
