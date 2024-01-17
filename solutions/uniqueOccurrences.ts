function uniqueOccurrences(arr: number[]): boolean {
  const occurMap = new Map();

  for (const num of arr) {
    const numOcurrence = occurMap.get(num) || 0;
    occurMap.set(num, numOcurrence + 1);
  }

  const ocurrSet = new Set();
  for (const ocurr of occurMap.values()) {
    if (ocurrSet.has(ocurr)) return false;
    ocurrSet.add(ocurr);
  }

  return true;
};