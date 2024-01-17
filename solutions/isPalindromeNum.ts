function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let num = x;
  let reverseNum = 0;

  while (num !== 0) {
    reverseNum = (reverseNum * 10) + num % 10; 
    num = Math.floor(num / 10);
  }

  return reverseNum === x;
};