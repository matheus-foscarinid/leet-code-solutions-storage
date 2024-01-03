function isHappy(n: number): boolean {
  let memo = new Set();

  let sum = n;
  let current = n.toString();
  
  while (sum !== 1 && !memo.has(current)) {
    memo.add(current);

    sum = 0;
    for (let i = 0; i < current.length; i++) {
      sum += Number(current[i]) ** 2;
    }

    current = sum.toString();
  }

  return sum === 1;
};