function threeSum(nums: number[]): number[][] {
  const nLength = nums.length;
  const answer: number[][] = [];
  // we can't use just nums.sort() because it will sort the numbers as strings
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nLength - 2; i++) {
    // we can skip the value if it's the same as the last value
    // because we know that the sum will be the same and we cant have duplicates
    // note: we can't  skip comparing with the next value because it would skip
    // some cases with duplicate values
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const iNum = nums[i];
    let p1 = i + 1;
    let p2 = nLength - 1;

    while (p1 < p2) {
      const sum = iNum + nums[p1] + nums[p2];

      if (sum === 0) {
        answer.push([iNum, nums[p1], nums[p2]]);
        while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
        while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
        // we can change both pointers because we know that the array is sorted
        // and that the next value is going to be different, so the sum will be different
        // and we can skip it
        p1++; 
        p2--;
      } else if (sum > 0) {
        // if the sum is greater than 0, we need to decrease the sum
        p2--;
      } else {
        // if the sum is less than 0, we need to increase the sum
        p1++;
      }
    }
  }

  return answer;
};