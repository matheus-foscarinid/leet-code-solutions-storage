func guessNumber(n int) int {
	high := n
	low := 0

	for low <= high {
		mid := (high + low) / 2
		result := guess(mid)

		if result == 0 {
			return mid
		} else if result == 1 {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}