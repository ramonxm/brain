# 🔗 Linked List

## Introduction

A **linked list** is a linear data structure where each element (node) contains a value and a reference (pointer) to the next node in the sequence.

## Types
- **Singly Linked List**: Each node points to the next node
- **Doubly Linked List**: Each node points to both the next and previous nodes
- **Circular Linked List**: The last node points back to the first node

## Key Operations
- **Insert**: Add a new node (O(1) at head, O(n) at tail or arbitrary position)
- **Delete**: Remove a node (O(1) if node is known, O(n) to search)
- **Search**: Find a node with a given value (O(n))
- **Traversal**: Visit all nodes in sequence (O(n))

## Example (Python - Singly Linked List)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        curr = self.head
        while curr:
            print(curr.data, end=" ")
            curr = curr.next
        print()

# Usage
ll = LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.print_list()  # Output: 10 20 30
```

## Applications
- Implementing stacks, queues, and other abstract data types
- Dynamic memory allocation
- Undo functionality in applications

## When to Use a Linked List
- When you need efficient insertions/deletions at arbitrary positions
- When the size of the data structure changes frequently

## Limitations
- No direct access by index (must traverse from the head)
- Extra memory for pointers
- Slower search compared to arrays

## Related Data Structures
- **Array**: Direct access by index, fixed size
- **Doubly Linked List**: Allows traversal in both directions 