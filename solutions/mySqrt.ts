function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;
  
  let max = x;
  let min = 0;
  let square = 0;

  // Its a simple binary search!
  while (min <= max) {
    const mid = Math.floor((max + min) / 2);
    square = mid * mid;

    if (square === x) return mid;

    if (square > x) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return max;
};