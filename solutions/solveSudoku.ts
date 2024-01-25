function solveSudoku(board: string[][]): void {
  let solved = false;
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const columns = Array.from({ length: 9 }, () => new Set<string>());
  const subBoxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num === '.') continue;

      rows[i].add(num);
      columns[j].add(num);
      let subBoxI = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      subBoxes[subBoxI].add(num);
    }
  }

  const canAddNumTo = (num: string, i: number, j: number) => {
    let subBoxI = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    return !rows[i].has(num) && !columns[j].has(num) && !subBoxes[subBoxI].has(num);
  };

  const backtrack = (i: number, j: number) => {
    if (i === 9) {
      solved = true;
      return;
    };

    let nextI = i + Math.floor((j + 1) / 9);
    let nextJ = (j + 1) % 9;

    let num = board[i][j];
    if (num !== '.') {
      backtrack(nextI, nextJ);
    } else {
      for (let num = 1; num <= 9; num++) {
        let numStr = num.toString();
        
        if (!canAddNumTo(numStr, i, j)) continue;
        rows[i].add(numStr);
        columns[j].add(numStr);
        let subBoxI = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        subBoxes[subBoxI].add(numStr);
        board[i][j] = numStr;

        backtrack(nextI, nextJ);

        if (solved) break;
        rows[i].delete(numStr);
        columns[j].delete(numStr);
        subBoxes[subBoxI].delete(numStr);
        board[i][j] = '.';
      }
    }
  };

  backtrack(0, 0);
}