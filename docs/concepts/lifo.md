# LIFO (Last In, First Out)

LIFO, or "Last In, First Out," is a data organization method where the last element added is the first one to be removed. This concept is commonly applied in data structures such as stacks.

## Stacks

A stack is a collection of elements where insertion and removal operations occur only at one end, known as the top. When an element is added to the stack, it becomes the new top, and when an element is removed, it is always the element at the top that is taken out.

### LIFO Operation in Stacks

- **Insertion (Push):** New elements are added to the top of the stack.
- **Removal (Pop):** Removal also happens at the top, taking out the most recently added element.

### Example Code in Python

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

# Using the Stack
stack_example = Stack()
stack_example.push(1)
stack_example.push(2)
stack_example.push(3)

print(stack_example.pop())  # Output: 3
print(stack_example.pop())  # Output: 2
