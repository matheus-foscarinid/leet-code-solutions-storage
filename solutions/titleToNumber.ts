function titleToNumber(columnTitle: string): number {
  let result = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle[i].charCodeAt(0) - 64) * (26 ** (columnTitle.length - 1 - i));
  }

  return result;
};