var maxDiameter int

func diameterOfBinaryTree(root *TreeNode) int {
	maxDiameter = 0
	maxDiameterFromNode(root)
	return maxDiameter
}

func maxDiameterFromNode(root *TreeNode) int {
	if root == nil {
		return 0
	}

	left := maxDiameterFromNode(root.Left)
	right := maxDiameterFromNode(root.Right)
	localMax := left + right

	maxDiameter = max(maxDiameter, localMax)
	return max(left, right) + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
