---
sidebar_label: "Busca em Largura (BFS)"
description: "Percorre um grafo nível a nível; encontra o menor caminho em grafos não ponderados."
---

# Busca em largura (BFS)

A **busca em largura** (*Breadth-First Search*, BFS) percorre um grafo visitando primeiro todos os vizinhos de um vértice antes de avançar para o próximo nível. Por isso, ela encontra o **menor caminho em número de arestas** em grafos não ponderados.

## Como funciona

1. Marque o vértice de origem como visitado e coloque-o em uma [fila](../../data-structures/queue.md).
2. Enquanto a fila não estiver vazia, retire o vértice do início.
3. Para cada vizinho ainda não visitado, marque-o como visitado e coloque-o no final da fila.

Como a fila é [FIFO](../../concepts/fifo.md), todos os vértices a distância `k` são processados antes dos vértices a distância `k + 1`.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(V + E)     |
| Espaço  | O(V)         |

V é o número de vértices e E, o número de arestas. Cada vértice entra na fila uma vez e cada aresta é examinada uma vez (duas, em grafos não direcionados).

## Implementação

```python
from collections import deque


def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order
```

## Exemplo de uso

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"],
}

print(bfs(graph, "A"))  # Saída: ['A', 'B', 'C', 'D', 'E', 'F']
```

## Vantagens e desvantagens

### Vantagens

- Encontra o menor caminho em grafos não ponderados
- Explora o grafo de forma previsível, nível a nível

### Desvantagens

- Pode usar muita memória em grafos largos, pois a fila guarda um nível inteiro
- Não considera pesos nas arestas

## Quando usar

- Para obter o menor número de passos entre dois vértices
- Para explorar todos os vértices de um nível antes de ir mais fundo (redes sociais, web crawlers, labirintos)

## Relacionados

- [Fila (queue)](../../data-structures/queue.md)
- [FIFO](../../concepts/fifo.md)
- Busca em profundidade (DFS)
- Algoritmo de Dijkstra (menor caminho em grafos ponderados)
