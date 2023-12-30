function majorityElement(nums: number[]): number {
  let mElement = nums[0];
  let count = 0;

  for (const num of nums) {
    if (!count) mElement = num;
    count += (num === mElement) ? 1 : -1;
  }

  return mElement;
};