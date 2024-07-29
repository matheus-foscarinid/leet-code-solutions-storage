package main

import "fmt"

func convert(s string, numRows int) string {
	if numRows == 1 || numRows >= len(s) {
		return s
	}

	zigzagMatrix := make([]string, numRows)

	currRow := 0
	goDown := false

	for i := 0; i < len(s); i++ {
		zigzagMatrix[currRow] = zigzagMatrix[currRow] + string(s[i])

		if currRow == 0 || currRow == numRows-1 {
			goDown = !goDown
		}

		if goDown {
			currRow++
		} else {
			currRow--
		}
	}

	zigzagString := ""
	for _, row := range zigzagMatrix {
		zigzagString = zigzagString + row
	}

	return zigzagString
}

func main() {
	s := "AB"
	numRows := 1
	result := convert(s, numRows)
	fmt.Println(result) // Output: "PAHNAPLSIIGYIR"
}
