function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // Left shift result by 1bit and do a OR with the last bit of n (n & 1)
    result = (result << 1) | (n & 1)
    // Right shift by 1bit on n
    n >>>= 1;
  }

  return result >>> 0;
};