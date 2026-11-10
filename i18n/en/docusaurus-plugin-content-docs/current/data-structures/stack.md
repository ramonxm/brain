---
sidebar_label: "Stack"
sidebar_position: 4
description: "A linear LIFO structure with insertion and removal at the top."
---

# Stack

A **stack** is a linear structure that follows the [LIFO](../concepts/lifo.md) policy: the last element inserted is the first one removed. Every operation happens at a single end, the **top**.

## How it works

- **Push**: adds an element to the top
- **Pop**: removes and returns the top element
- **Peek**: reads the top without removing it
- **Is empty**: checks whether the stack is empty

## Complexity

| Operation | Complexity |
| :-------- | :--------- |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |
| Search    | O(n)       |

## Implementation

In Python, a `list` already works as a stack by using its end as the top:

```python
stack = []

stack.append(10)  # push
stack.append(20)
stack.append(30)

print(stack[-1])     # Output: 30 (peek)
print(stack.pop())   # Output: 30
print(stack.pop())   # Output: 20

if not stack:
    print("Stack is empty")
```

## Applications

- Function call stack
- Undo/redo in editors
- Expression evaluation (postfix notation) and bracket matching
- Parsing and depth-first search (DFS)

## Pros and cons

### Advantages

- Every main operation is O(1)
- Simple to implement on top of an array or linked list

### Disadvantages

- Only the top is accessible
- Not suited for random access

## When to use

- When you need to reverse the order of data
- To keep track of nested or recursive operations

## Review questions

<details>
<summary>What are the operations of a stack and their complexities?</summary>

Push, pop and peek in O(1). Searching for a value costs O(n).

</details>

<details>
<summary>Why does a stack solve balanced-parentheses checking?</summary>

The last opened bracket must be the first one closed. Push each opening bracket and, on each closing one, pop and check that they match.

</details>

<details>
<summary>In Python, which end of a `list` should be the top?</summary>

The end: `append` and `pop()` are O(1). Using the front would cost O(n) per operation.

</details>

## Related

- [LIFO](../concepts/lifo.md)
- [Queue](./queue.md)
- [Stack and heap memory](../concepts/memory-stack-heap.md)
