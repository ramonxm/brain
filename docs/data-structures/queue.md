# Queue

## Introduction

A **queue** is a linear data structure that follows the First-In, First-Out (FIFO) principle. The first element added is the first one to be removed.

## Key Operations
- **Enqueue**: Add an element to the end of the queue (O(1))
- **Dequeue**: Remove the element from the front of the queue (O(1))
- **Peek/Front**: View the front element without removing it (O(1))
- **IsEmpty**: Check if the queue is empty

## Example (Python)

```python
from collections import deque

queue = deque()

# Enqueue elements
queue.append(10)
queue.append(20)
queue.append(30)

# Peek at the front
print(queue[0])  # Output: 10

# Dequeue elements
print(queue.popleft())  # Output: 10
print(queue.popleft())  # Output: 20

# Check if empty
if not queue:
    print("Queue is empty!")
```

## Applications
- Task scheduling (print queue, CPU scheduling)
- Breadth-first search (BFS) in graphs
- Handling requests in web servers
- Buffer management

## When to Use a Queue
- When you need to process items in the order they arrive
- When implementing algorithms like BFS

## Limitations
- Only the front and rear elements are accessible
- Not suitable for random access

## Related Data Structures
- **Stack**: Follows Last-In, First-Out (LIFO)
- **Deque**: Double-ended queue, allows insertion/removal from both ends 