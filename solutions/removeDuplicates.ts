function removeDuplicates(nums: number[]): number {
  let uniqueNumbersQtt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueNumbersQtt] = nums[i];
      uniqueNumbersQtt++;
    }
  }

  return uniqueNumbersQtt;
};