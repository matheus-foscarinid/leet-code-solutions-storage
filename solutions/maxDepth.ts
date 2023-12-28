const getMaxDepthFromTree = (root: TreeNode | null, currDepth: number) => {
  if (!root) return currDepth;

  return Math.max(
    getMaxDepthFromTree(root.left, currDepth + 1), 
    getMaxDepthFromTree(root.right, currDepth + 1), 
  )
}

function maxDepth(root: TreeNode | null): number {
  return getMaxDepthFromTree(root, 0)
};