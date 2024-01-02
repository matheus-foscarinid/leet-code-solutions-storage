function singleNumber(nums: number[]): number {
  return nums.reduce((num, acc) => acc ^ num, 0);
};