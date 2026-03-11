# 🕸️ Breadth-First Search (BFS)

## Introdução

O **Breadth-First Search (BFS)** é um algoritmo de busca em grafos que explora primeiro todos os vizinhos de um vértice, antes de avançar para o próximo "nível" de vizinhos.
Ele é muito utilizado para encontrar o **menor caminho em grafos não ponderados**.

## Como funciona

1. Comece a partir de um vértice origem e coloque-o em uma fila.
2. Marque o vértice como visitado.
3. Enquanto a fila não estiver vazia:
   - Retire um vértice da fila.
   - Visite todos os seus vizinhos ainda não visitados.
   - Marque esses vizinhos como visitados e coloque-os na fila.

## Implementação (Python)

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Exemplo de uso
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
}

bfs(graph, 'A')  # Saída: A B C D E F
```

## Aplicações

- Encontrar o menor caminho em grafos não ponderados.
- Implementação de web crawlers.
- Análise de redes sociais (nível de conexão entre pessoas).
- Broadcast em redes.
- Resolução de quebra-cabeças (como word ladder, variações de labirinto, etc.).

## Complexidade

- **Tempo**: O(V + E), onde V é o número de vértices e E é o número de arestas.
- **Espaço**: O(V), devido à fila e ao conjunto de vértices visitados.

## Quando usar BFS

- Quando você precisa do **menor número de passos** em um grafo não ponderado.
- Quando deseja explorar todos os nós de um nível antes de ir mais fundo.

## Algoritmos relacionados

- **Depth-First Search (DFS)**: explora o grafo indo o mais fundo possível antes de voltar.
- **Dijkstra**: encontra o menor caminho em grafos ponderados com pesos não negativos.