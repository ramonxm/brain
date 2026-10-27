---
sidebar_label: "FIFO"
description: "First In, First Out: the first element added is the first one removed."
---

# FIFO (First In, First Out)

**FIFO** ("first in, first out") is the policy in which elements are removed in the same order they were added, like a supermarket checkout line: whoever arrives first is served first.

## How it works

The structure that implements FIFO is the [queue](../data-structures/queue.md), with two operations:

- **Enqueue**: adds an element to the back
- **Dequeue**: removes the element at the front

## Complexity

| Operation | Complexity |
| :-------- | :--------- |
| Enqueue   | O(1)       |
| Dequeue   | O(1)       |

## Implementation

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

print(queue.dequeue())  # Output: 1
print(queue.dequeue())  # Output: 2
```

:::warning[Watch out for lists]

In Python, `list.pop(0)` is O(n) because it shifts every element. Use `collections.deque` to get O(1) at both ends.

:::

## Applications

- Print and task queues
- Process scheduling
- Network and I/O buffers
- [Breadth-first search (BFS)](../algorithms/graph/breadth-first-search.md)

## Related

- [LIFO](./lifo.md)
- [Queue](../data-structures/queue.md)
