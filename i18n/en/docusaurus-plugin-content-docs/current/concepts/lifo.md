---
sidebar_label: "LIFO"
description: "Last In, First Out: the last element added is the first one removed."
---

# LIFO (Last In, First Out)

**LIFO** ("last in, first out") is the policy in which the element removed is always the most recent one, like a stack of plates: the last one placed on top is the first one taken off.

## How it works

The structure that implements LIFO is the [stack](../data-structures/stack.md). Insertions and removals happen at a single end, the **top**:

- **Push**: adds an element to the top
- **Pop**: removes the element from the top

## Complexity

| Operation | Complexity |
| :-------- | :--------- |
| Push      | O(1)       |
| Pop       | O(1)       |

## Implementation

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

print(stack.pop())  # Output: 3
print(stack.pop())  # Output: 2
```

## Applications

- Function call stack
- Undo/redo in editors
- Expression evaluation and bracket matching
- Depth-first search (DFS)

## Related

- [FIFO](./fifo.md)
- [Stack](../data-structures/stack.md)
- [Stack and heap memory](./memory-stack-heap.md)
