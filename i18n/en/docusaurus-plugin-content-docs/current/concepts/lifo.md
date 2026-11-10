---
sidebar_label: "LIFO"
sidebar_position: 5
description: "Last In, First Out: the last element added is the first one removed."
---

# LIFO (Last In, First Out)

**LIFO** ("last in, first out") is the policy in which the element removed is always the most recent one, like a stack of plates: the last one placed on top is the first one taken off.

## How it works

The policy only defines **which** element leaves, not how elements are stored. Insertions and removals happen at the same end, so the output order is the **reverse** of the input order: inserting `1, 2, 3` and removing everything returns `3, 2, 1`.

That makes LIFO the natural policy for anything **nested**: the last thing opened must be the first one closed. The structure that implements it is the [stack](../data-structures/stack.md).

## Comparison

| Characteristic       | LIFO                          | [FIFO](./fifo.md)              |
| :------------------- | :---------------------------- | :----------------------------- |
| Leaves first         | The most recent               | The oldest                     |
| Output order         | Reverse of input              | Same as input                  |
| Structure            | Stack                         | Queue                          |
| Graph traversal      | Depth-first search (DFS)      | Breadth-first search (BFS)     |

## Applications

- [Call stack](./memory-stack-heap.md): each function returns before its caller
- Undo: the last action is the first one undone
- Parentheses checking: the last one opened is the first one closed
- Depth-first search (DFS): always explores the most recently discovered vertex

## Review questions

<details>
<summary>What kind of problem usually calls for LIFO?</summary>

Problems with a nested structure, where the last element opened must be the first one resolved: function calls, parentheses, undo.

</details>

<details>
<summary>What happens to the order of elements that go through a stack?</summary>

It is reversed: inserting `1, 2, 3` and removing everything returns `3, 2, 1`.

</details>

<details>
<summary>What traversal do you get if you replace the BFS queue with a stack?</summary>

A depth-first search (DFS), because the next vertex explored becomes the most recently discovered one.

</details>

## Related

- [Stack](../data-structures/stack.md)
- [FIFO](./fifo.md)
- [Stack and heap memory](./memory-stack-heap.md)
