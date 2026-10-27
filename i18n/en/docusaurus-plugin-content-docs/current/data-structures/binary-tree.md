---
sidebar_label: "Binary Tree"
description: "A hierarchical structure where each node has at most two children."
---

# Binary tree

A **binary tree** is a hierarchical structure in which each node has at most two children, called the left child and the right child. When the values follow the rule `left < node < right`, it is a **binary search tree** (BST).

## How it works

- **Root**: the node at the top of the tree
- **Leaf**: a node with no children
- **Height**: length of the longest path from the root to a leaf
- **Depth**: length of the path from the root to a node

Common types:

- **Full**: every node has 0 or 2 children
- **Complete**: every level is full except possibly the last, filled from left to right
- **Perfect**: every internal node has two children and every leaf is on the same level
- **Balanced**: the height is kept at O(log n)

## Complexity

For a binary search tree:

| Operation | Complexity (balanced) | Complexity (worst case) |
| :-------- | :-------------------- | :---------------------- |
| Search    | O(log n)              | O(n)                    |
| Insert    | O(log n)              | O(n)                    |
| Remove    | O(log n)              | O(n)                    |
| Traversal | O(n)                  | O(n)                    |

The worst case happens when the tree degenerates into a list, for example when inserting already sorted values.

## Implementation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def inorder(root):
    """In-order traversal: left, node, right."""
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)


root = Node(10)
root.left = Node(5)
root.right = Node(15)
root.left.left = Node(2)
root.left.right = Node(7)

inorder(root)  # Output: 2 5 7 10 15
```

## Applications

- Hierarchical data (file systems, org charts)
- Expression trees in compilers
- Search trees for fast search, insertion and removal
- Heaps for priority queues

## Pros and cons

### Advantages

- O(log n) operations when balanced
- In-order traversal returns values in sorted order (BST)

### Disadvantages

- Can become unbalanced and degrade to O(n)
- More complex to implement than arrays and lists

## When to use

- To represent hierarchical relationships
- When search, insertion and removal must be efficient and the data must stay sorted

## Related

- [Construct Binary Tree](../algorithms/contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md)
- [Binary search](../algorithms/search/binary-search.md)
- AVL and red-black trees (self-balancing search trees)
