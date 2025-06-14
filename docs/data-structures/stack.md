# Stack

## Introduction

A **stack** is a linear data structure that follows the Last-In, First-Out (LIFO) principle. The last element added is the first one to be removed.

## Key Operations
- **Push**: Add an element to the top of the stack (O(1))
- **Pop**: Remove the top element from the stack (O(1))
- **Peek/Top**: View the top element without removing it (O(1))
- **IsEmpty**: Check if the stack is empty

## Example (Python)

```python
stack = []

# Push elements
stack.append(10)
stack.append(20)
stack.append(30)

# Peek at the top
print(stack[-1])  # Output: 30

# Pop elements
print(stack.pop())  # Output: 30
print(stack.pop())  # Output: 20

# Check if empty
if not stack:
    print("Stack is empty!")
```

## Applications
- Function call management (call stack)
- Undo/redo features in editors
- Expression evaluation (postfix, prefix)
- Syntax parsing

## When to Use a Stack
- When you need to reverse data
- When you need to track nested or recursive operations

## Limitations
- Only the top element is accessible
- Not suitable for random access

## Related Data Structures
- **Queue**: Follows First-In, First-Out (FIFO)
- **Deque**: Double-ended queue, allows insertion/removal from both ends 