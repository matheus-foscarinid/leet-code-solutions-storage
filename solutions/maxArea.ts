function maxArea(height: number[]): number {
  // we'll use the 2 pointer approach to solve the problem
  // as we need to the maximum amount of water the container
  // can store, we'll have the pointers from 0 till n-1
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;

  while (start < end) {
    // we'll calcuate the area and then we'll keep track of the highest value
    const currArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(maxArea, currArea);

    // now we need to move either the start pointer or end pointer
    // as we require the container to be max, we need to move
    // the smallest value between start and end pointer
    if (height[start] < height[end]) start++;
    else end--;
  }

  return maxArea;
};