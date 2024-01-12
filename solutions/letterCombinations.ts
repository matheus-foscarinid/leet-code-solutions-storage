function letterCombinations(digits: string): string[] {
  let answer: string[] = [];
  
  const NUM_LETTER_MAP = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  const addCombinationFromIndex = (currCombination = '', index = 0) => {
    if (index > digits.length - 1) {
      answer.push(currCombination);
      return;
    }

    for (const letter of NUM_LETTER_MAP[index]) {
      addCombinationFromIndex(currCombination + letter, index + 1);
    }
  }

  addCombinationFromIndex();
  return answer;
};