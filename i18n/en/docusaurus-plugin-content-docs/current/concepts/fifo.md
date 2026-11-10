---
sidebar_label: "FIFO"
sidebar_position: 4
description: "First In, First Out: the first element added is the first one removed."
---

# FIFO (First In, First Out)

**FIFO** ("first in, first out") is the policy in which elements are removed in the same order they were added, like a supermarket line: whoever arrives first is served first.

## How it works

The policy only defines **which** element leaves, not how elements are stored. Elements enter at one end and leave at the other, so the output order is the **same** as the input order: inserting `1, 2, 3` and removing everything returns `1, 2, 3`.

That makes FIFO the natural policy for anything that must be **fair** or handled **in arrival order**. The structure that implements it is the [queue](../data-structures/queue.md). The [comparison with LIFO](./lifo.md#comparison) shows both side by side.

## Applications

- [Breadth-first search (BFS)](../algorithms/graph/breadth-first-search.md): processes vertices by distance level
- Scheduling processes and [threads](./thread.md) in arrival order
- Print, task and message queues
- Network and I/O buffers, which must preserve the order of the data

## Review questions

<details>
<summary>What kind of problem usually calls for FIFO?</summary>

Problems where arrival order matters or where everything must be processed in layers, such as BFS and task queues.

</details>

<details>
<summary>Why does a queue preserve order while a stack reverses it?</summary>

In a queue, insertion and removal happen at opposite ends; in a stack, at the same end.

</details>

<details>
<summary>Why does BFS rely on FIFO to find the shortest path?</summary>

FIFO guarantees that every vertex at distance `k` leaves the queue before those at distance `k + 1`.

</details>

## Related

- [Queue](../data-structures/queue.md)
- [LIFO](./lifo.md)
- [Breadth-first search (BFS)](../algorithms/graph/breadth-first-search.md)
