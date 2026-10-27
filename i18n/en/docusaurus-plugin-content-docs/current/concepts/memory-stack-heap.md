---
sidebar_label: "Stack and Heap"
description: "The two main memory regions of a program and when each one is used."
---

# Stack and heap memory

While running, a program uses two main memory regions: the **stack**, for temporary data from function calls, and the **heap**, for dynamically allocated data that must outlive a single call.

## How it works

### Stack

Each function call pushes a block (*frame*) onto the stack containing:

- Function parameters
- Local variables (especially primitive types)
- Return address

When the function returns, the frame is removed automatically. The stack follows the [LIFO](./lifo.md) model: the last frame pushed is the first one removed.

- **Allocation**: automatic, managed by the runtime
- **Speed**: very fast
- **Size**: limited; deep recursion causes a *stack overflow*

### Heap

The heap holds memory reserved on demand at run time, such as objects, lists, trees and graphs.

- **Allocation**: manual in C/C++ (`malloc`/`free`), automatic via a *garbage collector* in Java, JavaScript, Python and C#
- **Speed**: slower than the stack, due to management overhead
- **Size**: usually much larger than the stack
- **Risks**: memory leaks in languages without a garbage collector

```python
def build_list(n):
    size = n            # 'size' and the 'items' reference live in the frame (stack)
    items = [0] * size  # the list itself is allocated on the heap
    return items        # the frame is discarded; the list stays on the heap
```

## Comparison

| Characteristic | Stack                          | Heap                               |
| :------------- | :----------------------------- | :--------------------------------- |
| Allocation     | Automatic                      | Manual (C/C++) or automatic (GC)   |
| Speed          | Very fast                      | Slower                             |
| Size           | Limited                        | Usually larger                     |
| Usage          | Local variables and calls      | Objects and dynamic structures     |
| Deallocation   | When the function returns      | Manual or by the garbage collector |
| Risks          | Stack overflow                 | Leaks and fragmentation            |

## When to use

- **Stack**: small data whose lifetime is limited to one function
- **Heap**: large data, data whose size is unknown at compile time, or data that must outlive the function that created it

## Related

- [LIFO](./lifo.md)
- [Stack](../data-structures/stack.md)
- [Threads](./thread.md)
