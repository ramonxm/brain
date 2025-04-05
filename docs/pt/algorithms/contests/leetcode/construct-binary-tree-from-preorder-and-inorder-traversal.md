---
sidebar_position: 2
---
# Construct Binary Tree from Preorder and Inorder Traversal
## Descrição
Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.
## Solução

```ts
class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val === undefined ? 0 : val)
         this.left = (left === undefined ? null : left)
         this.right = (right === undefined ? null : right)
     }
 }
 
 
function buildTree(preorder: number[], inorder: number[]) : TreeNode | null {
  if (inorder.length) {
      const index = inorder.indexOf(preorder.shift()!);
      const root = new TreeNode(inorder[index]);

      root.left = buildTree(preorder, inorder.slice(0, index));
      root.right = buildTree(preorder, inorder.slice(index + 1));
      return root;
  }
  
  return null;
};
```
