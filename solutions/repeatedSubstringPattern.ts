function repeatedSubstringPattern(s: string): boolean {
  // If we double the string, we can find the original string in the middle
  // ex: abcabc -> abcabcabcabc
  // a|bcabcabcab|c -> bc(abcabc)ab
  return (s + s).slice(1, -1).includes(s);
};