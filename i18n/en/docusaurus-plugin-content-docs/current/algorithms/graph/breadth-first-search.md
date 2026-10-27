---
sidebar_label: "Breadth-First Search (BFS)"
description: "Traverses a graph level by level; finds shortest paths in unweighted graphs."
---

# Breadth-first search (BFS)

**Breadth-first search** (BFS) traverses a graph by visiting all the neighbors of a vertex before moving on to the next level. That is why it finds the **shortest path in number of edges** in unweighted graphs.

## How it works

1. Mark the source vertex as visited and put it in a [queue](../../data-structures/queue.md).
2. While the queue is not empty, take the vertex at the front.
3. For each neighbor not yet visited, mark it as visited and add it to the back of the queue.

Since the queue is [FIFO](../../concepts/fifo.md), every vertex at distance `k` is processed before any vertex at distance `k + 1`.

## Complexity

| Metric | Complexity |
| :----- | :--------- |
| Time   | O(V + E)   |
| Space  | O(V)       |

V is the number of vertices and E the number of edges. Each vertex enters the queue once and each edge is examined once (twice, in undirected graphs).

## Implementation

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

## Usage example

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"],
}

print(bfs(graph, "A"))  # Output: ['A', 'B', 'C', 'D', 'E', 'F']
```

## Pros and cons

### Advantages

- Finds the shortest path in unweighted graphs
- Explores the graph predictably, level by level

### Disadvantages

- Can use a lot of memory on wide graphs, since the queue holds an entire level
- Ignores edge weights

## When to use

- To get the fewest steps between two vertices
- To explore every vertex of a level before going deeper (social networks, web crawlers, mazes)

## Related

- [Queue](../../data-structures/queue.md)
- [FIFO](../../concepts/fifo.md)
- Depth-first search (DFS)
- Dijkstra's algorithm (shortest paths in weighted graphs)
