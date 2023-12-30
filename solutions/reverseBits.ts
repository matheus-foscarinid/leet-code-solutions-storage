function reverseBits(n: number): number {
	let m = 0;

  for(let i = 0; i < 32; i++) {
    m = (m << 1) | (n & 1);
    n >>>= 1;
  }

  return m >>> 0;
};