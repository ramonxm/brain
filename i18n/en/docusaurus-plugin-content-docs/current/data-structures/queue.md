---
sidebar_label: "Queue"
description: "A linear FIFO structure with insertion at the back and removal at the front."
---

# Queue

A **queue** is a linear structure that follows the [FIFO](../concepts/fifo.md) policy: the first element inserted is the first one removed. Elements enter at the **back** and leave from the **front**.

## How it works

- **Enqueue**: adds an element to the back
- **Dequeue**: removes and returns the front element
- **Peek**: reads the front without removing it
- **Is empty**: checks whether the queue is empty

## Complexity

| Operation | Complexity |
| :-------- | :--------- |
| Enqueue   | O(1)       |
| Dequeue   | O(1)       |
| Peek      | O(1)       |
| Search    | O(n)       |

## Implementation

In Python, `collections.deque` provides O(1) at both ends:

```python
from collections import deque

queue = deque()

queue.append(10)  # enqueue
queue.append(20)
queue.append(30)

print(queue[0])          # Output: 10 (peek)
print(queue.popleft())   # Output: 10
print(queue.popleft())   # Output: 20

if not queue:
    print("Queue is empty")
```

## Applications

- Task scheduling (print queue, CPU)
- [Breadth-first search (BFS)](../algorithms/graph/breadth-first-search.md)
- Request handling in servers
- Data buffers

## Pros and cons

### Advantages

- Every main operation is O(1)
- Preserves arrival order

### Disadvantages

- Only the front and back are accessible
- Not suited for random access

## When to use

- When items must be processed in arrival order
- In algorithms that explore data level by level, such as BFS

## Related

- [FIFO](../concepts/fifo.md)
- [Stack](./stack.md)
- [Breadth-first search (BFS)](../algorithms/graph/breadth-first-search.md)
