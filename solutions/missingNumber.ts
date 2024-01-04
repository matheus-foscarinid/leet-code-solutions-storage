function missingNumber(nums: number[]): number {
  const max = nums.length;
  const min = 0;

  const sum = nums.reduce((acc, num) => acc + num);
  const rangeSum = (max + 1) / 2 * (min + max);

  return rangeSum - sum;
};