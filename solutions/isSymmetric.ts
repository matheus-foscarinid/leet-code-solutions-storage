class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const compare =(a: TreeNode | null, b: TreeNode | null): boolean => {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val !== b.val) return false;

  // Like a default binary tree comparsion, but mirrored
  // normally we would compare a.left with b.left and a.right with b.right
  // but here we compare a.left with b.right and a.right with b.left
  return compare(a.left, b.right) && compare(a.right, b.left);
};

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  return compare(root.left, root.right);
};