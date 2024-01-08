function longestPalindrome(s: string): string {
  let ans = '';

  const getBiggestPalindromeFromCenter = (start: number, end: number): string => {
    while (start >= 0 && end <= s.length - 1 && s[start] === s[end]) {
      start--;
      end++
    }

    return s.substring(start + 1, end);
  }
  
  for (let i = 0; i < s.length; i++) {
    const odd = getBiggestPalindromeFromCenter(i, i);
    const even = getBiggestPalindromeFromCenter(i, i + 1);

    if (odd.length > ans.length) ans = odd;
    if (even.length > ans.length) ans = even;
  }

  return ans 
};