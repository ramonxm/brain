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

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))