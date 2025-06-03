# 🕸️ Breadth-First Search (BFS)

## Introduction

**Breadth-First Search (BFS)** is a graph traversal algorithm that explores all the neighbors of a node before moving to the next level. It is commonly used to find the shortest path in unweighted graphs.

## How It Works
1. Start from the source node and enqueue it
2. Mark the source as visited
3. While the queue is not empty:
   - Dequeue a node
   - Visit all its unvisited neighbors and enqueue them
   - Mark neighbors as visited

## Implementation (Python)
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

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
bfs(graph, 'A')  # Output: A B C D E F
```

## Applications
- Finding the shortest path in unweighted graphs
- Web crawlers
- Social network analysis
- Broadcasting in networks
- Solving puzzles (like Rubik's Cube, word ladder)

## Complexity
- **Time**: O(V + E), where V is the number of vertices and E is the number of edges
- **Space**: O(V)

## When to Use BFS
- When you need the shortest path in an unweighted graph
- When you want to explore all nodes at the current depth before going deeper

## Related Algorithms
- **Depth-First Search (DFS)**: Explores as far as possible along each branch before backtracking
- **Dijkstra's Algorithm**: Finds the shortest path in weighted graphs 