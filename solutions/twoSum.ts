function twoSum(nums: number[], target: number): number[] {
  // Create a map to store the indices of the numbers.
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    // Check if the value of target - nums[i] exists in the map, that means we have found a pair that sums up to target.
    if (map.has(target - nums[i])) {
      // Return the indices of the two numbers.
      return [map.get(target - nums[i]), i];
    }

    // Normally we would use i as key and nums[i] as value, but in this case, we are looking for the value, so we use nums[i] as key and i as value.
    map.set(nums[i], i);
  }

  // If no solution found, return empty array, just to make compiler happy.
  return [];
}
