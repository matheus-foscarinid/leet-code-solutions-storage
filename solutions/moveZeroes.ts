function moveZeroes(nums: number[]): void {
  let wPointer = 0;
  for (let rPointer = 0; rPointer < nums.length; rPointer++) {
    const rValue = nums[rPointer];
    nums[rPointer] = 0;

    if (rValue !== 0) {
      nums[wPointer] = rValue;
      wPointer++;
    }
  }
};