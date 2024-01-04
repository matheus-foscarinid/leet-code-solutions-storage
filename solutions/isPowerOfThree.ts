function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;
  if (n % 3 !== 0) return false;

  let currTry = 3;
  while (currTry < n) currTry *= 3;

  return currTry === n;
};
