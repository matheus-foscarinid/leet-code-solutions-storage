const cache = new Map();
cache.set(1, 1)
cache.set(2, 2)

// fibonacci!
function climbStairs(n: number): number {
  if (cache.has(n)) return cache.get(n);

  const result = climbStairs(n - 1) + climbStairs(n - 2);
  cache.set(n, result);

  return result;
};