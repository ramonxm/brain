---
sidebar_label: "Linked List"
description: "A sequence of nodes where each node points to the next one."
---

# Linked list

A **linked list** is a linear structure made of nodes, where each node stores a value and a reference to the next one. Unlike an [array](./array.md), nodes do not need to sit in contiguous memory.

## How it works

- **Singly linked list**: each node points to the next one
- **Doubly linked list**: each node points to the next and the previous one
- **Circular list**: the last node points back to the first one

The list keeps a reference to the first node, the **head**. To reach any other node, you must traverse the list from it.

## Complexity

| Operation                          | Complexity |
| :--------------------------------- | :--------- |
| Access by position                 | O(n)       |
| Search by value                    | O(n)       |
| Insert/remove at the head          | O(1)       |
| Insert/remove after a known node   | O(1)       |
| Append (without a tail pointer)    | O(n)       |

## Implementation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def prepend(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node

    def append(self, data):
        node = Node(data)
        if not self.head:
            self.head = node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = node

    def __str__(self):
        values, current = [], self.head
        while current:
            values.append(str(current.data))
            current = current.next
        return " -> ".join(values)


linked = LinkedList()
linked.append(20)
linked.append(30)
linked.prepend(10)
print(linked)  # Output: 10 -> 20 -> 30
```

## Applications

- Implementing stacks, queues and deques
- Adjacency lists in graphs
- Undo/redo history
- LRU caches (doubly linked list + hash table)

## Pros and cons

### Advantages

- O(1) insertion and removal at known positions
- Grows and shrinks without reallocation

### Disadvantages

- No direct access by index
- Extra memory for pointers
- Worse cache usage than arrays

## When to use

- When there are many insertions and removals at the start or in the middle
- When the collection size changes often

## Related

- [Array](./array.md)
- [Sort List](../algorithms/contests/leetcode/sort-list.md)
