function strStr(haystack: string, needle: string): number {
  const needleLastIndex = needle.length - 1;
  let startingNeedleIndex = 0;
  let currNeedleIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];

    if (char === needle[currNeedleIndex]) {
      if (currNeedleIndex === 0) startingNeedleIndex = i;
      if (currNeedleIndex === needleLastIndex) return startingNeedleIndex;
      currNeedleIndex++;
    } else {
      i = i - currNeedleIndex;
      currNeedleIndex = 0;
    }
  }

  return -1;
};