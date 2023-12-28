const isLetterOrDigit = (char: string) => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  s = s.toLowerCase();

  while (left < right) {
    if (!isLetterOrDigit(s[left])) {
      left++
    } else if (!isLetterOrDigit(s[right])) {
      right--;
    } else {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
  }

  return true;
};