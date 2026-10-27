---
sidebar_label: "Fila (Queue)"
description: "Estrutura linear FIFO com inserção no final e remoção no início."
---

# Fila (queue)

Uma **fila** (*queue*) é uma estrutura linear que segue a política [FIFO](../concepts/fifo.md): o primeiro elemento inserido é o primeiro a ser removido. Elementos entram pelo **final** e saem pelo **início**.

## Como funciona

- **Enqueue**: adiciona um elemento ao final
- **Dequeue**: remove e retorna o elemento do início
- **Peek**: consulta o início sem removê-lo
- **Is empty**: verifica se a fila está vazia

## Complexidade

| Operação | Complexidade |
| :------- | :----------- |
| Enqueue  | O(1)         |
| Dequeue  | O(1)         |
| Peek     | O(1)         |
| Busca    | O(n)         |

## Implementação

Em Python, `collections.deque` oferece O(1) nas duas extremidades:

```python
from collections import deque

queue = deque()

queue.append(10)  # enqueue
queue.append(20)
queue.append(30)

print(queue[0])          # Saída: 10 (peek)
print(queue.popleft())   # Saída: 10
print(queue.popleft())   # Saída: 20

if not queue:
    print("Fila vazia")
```

## Aplicações

- Escalonamento de tarefas (fila de impressão, CPU)
- [Busca em largura (BFS)](../algorithms/graph/breadth-first-search.md)
- Gerenciamento de requisições em servidores
- Buffers de dados

## Vantagens e desvantagens

### Vantagens

- Todas as operações principais em O(1)
- Preserva a ordem de chegada

### Desvantagens

- Só o início e o final são acessíveis
- Não serve para acesso aleatório

## Quando usar

- Quando os itens precisam ser processados na ordem de chegada
- Em algoritmos que exploram dados por níveis, como a BFS

## Relacionados

- [FIFO](../concepts/fifo.md)
- [Pilha (stack)](./stack.md)
- [Busca em largura (BFS)](../algorithms/graph/breadth-first-search.md)
