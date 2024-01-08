# FIFO (First In, First Out)

*FIFO*, which stands for "First In, First Out," is a method commonly used in computer programming and data structures. It refers to a type of data structure or processing where the first element that is added to a collection is the first one to be removed. This principle is similar to a queue in real-world scenarios, like standing in line at a grocery store. The person who arrives first is the first to be served.

In programming, FIFO is often implemented using a data structure called a queue.

1. **Enqueue:** Adds an element to the end of the queue.
2. **Dequeue:** Removes the element from the front of the queue.

This process ensures that elements are processed in the order they are added, maintaining the FIFO order.

Here's a simple example in Python using a list as a basic queue:

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Example Usage:
my_queue = Queue()
my_queue.enqueue(1)
my_queue.enqueue(2)
my_queue.enqueue(3)

print(my_queue.dequeue())  # Output: 1
print(my_queue.dequeue())  # Output: 2
