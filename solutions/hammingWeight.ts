function hammingWeight(n: number): number {
  if (!n) return 0;
  
  let ans = 0
  for (let i = 0; i < 32; i++) {
    ans += n & 1
    n >> 1
  }

  return ans;
};
