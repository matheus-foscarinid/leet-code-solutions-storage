function isValidSudoku(board: string[][]): boolean {
  const isValidPartial = (i, j, digit) => {
    // Check row
    for (let col = 0; col < 9; col++) {
      if (col !== j && board[i][col] === digit) return false;
    }

    // Check column
    for (let row = 0; row < 9; row++) {
      if (row !== i && board[row][j] === digit) return false;
    }

    // Check sub-box
    const subBoxStartRow = Math.floor(i / 3) * 3;
    const subBoxStartCol = Math.floor(j / 3) * 3;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const currRow = subBoxStartRow + row;
        const currCol = subBoxStartCol + col;
        if (currRow !== i && currCol !== j && board[currRow][currCol] === digit) {
          return false;
        }
      }
    }

    return true;
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];
      if (digit !== "." && !isValidPartial(i, j, digit)) {
        return false;
      }
    }
  }

  return true;
}