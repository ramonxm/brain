# Binary Tree

## Introduction

A **binary tree** is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.

## Key Properties
- **Root**: The top node of the tree
- **Leaf**: A node with no children
- **Height**: The length of the longest path from the root to a leaf
- **Depth**: The length of the path from the root to a node

## Types of Binary Trees
- **Full Binary Tree**: Every node has 0 or 2 children
- **Complete Binary Tree**: All levels are filled except possibly the last, which is filled from left to right
- **Perfect Binary Tree**: All internal nodes have two children and all leaves are at the same level
- **Balanced Binary Tree**: The height of the tree is minimized
- **Binary Search Tree (BST)**: Left child < parent < right child

## Example (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.data, end=" ")
        inorder_traversal(root.right)

# Usage
root = Node(10)
root.left = Node(5)
root.right = Node(15)
root.left.left = Node(2)
root.left.right = Node(7)

inorder_traversal(root)  # Output: 2 5 7 10 15
```

## Applications
- Hierarchical data representation (file systems, organization charts)
- Expression parsing and evaluation
- Binary search trees for fast lookup, insertion, and deletion
- Heaps for priority queues

## When to Use a Binary Tree
- When you need to represent hierarchical relationships
- When you need efficient searching, insertion, and deletion (BST)

## Limitations
- Can become unbalanced, leading to poor performance (O(n) operations)
- More complex to implement than arrays or linked lists

## Related Data Structures
- **Binary Search Tree (BST)**: Maintains sorted order
- **AVL Tree, Red-Black Tree**: Self-balancing binary search trees
- **Heap**: Complete binary tree used for priority queues 