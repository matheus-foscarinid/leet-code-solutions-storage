function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (findHigh: boolean) => {
    let low = 0;
    let high = nums.length - 1;
    let index = -1;

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (nums[mid] === target) {
        index = mid;
        if (!findHigh) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return index;
  }

  const firstIndex = binarySearch(false);
  if (firstIndex === -1) return [-1, -1];
  return [firstIndex, binarySearch(true)];
};