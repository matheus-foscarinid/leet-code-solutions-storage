function longestCommonPrefix(strs: string[]): string {
  let sortedAlphabetically = strs.sort((a,b) => a < b? -1:1);

  let firstWord = sortedAlphabetically[0];
  let lastWord = sortedAlphabetically[sortedAlphabetically.length - 1];

  let prefix = '';
  // After sorting, if the first and last word have a common prefix, 
  // then all the words in the array have that prefix
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === lastWord[i]) prefix += firstWord[i];
    else break;
  }

  return prefix;
};