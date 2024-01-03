function containsDuplicate(nums: number[]): boolean {
  let memo = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (memo.has(num)) return true;
    memo.add(num);
  }

  return false;
};