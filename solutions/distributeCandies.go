func distributeCandies(candyType []int) int {
	set := make(map[int]bool)

	for _, candy := range candyType {
		set[candy] = true
	}

	return min(len(set), len(candyType)/2)
}
