function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  let pointer = 0;
  for (let i = 0; i < nums1.length; i++) {
    const iNum = nums1[i];
    for (let j = pointer; j < nums2.length; j++) {
      if (iNum === nums2[j]) {
        result.push(iNum);

        const temp = nums2[j];
        nums2[j] = nums2[pointer];
        nums2[pointer] = temp;
      
        pointer++;
        break;
      }
    }
  }

  return result;
}