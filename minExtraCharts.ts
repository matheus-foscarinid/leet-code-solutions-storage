function minExtraChar(s: string, dictionary: string[]): number {
  const sLength = s.length;
  const dictionarySet = new Set(dictionary);
  const memo = new Map();

  // Function that calculates the minimal numbers of extra chars
  // starting from an index
  const calculateMinExtraChars = (start: number = 0): number => {
    // If we got to the end of "s" there's no extra chars anymore
    if (start === sLength) return 0;

    // If the min extras chars was already memoized from this index, use cache
    if (memo.has(start)) return memo.get(start);

    // We check for the min extra chars starting from the next index
    // and adding + 1 because we are counting the this char as a left over
    let answer = calculateMinExtraChars(start + 1) + 1;
    for (let end = start; end < sLength; end++) {
      const substring = s.substring(start, end + 1);

      // If the dictionary includes the substring, then we check if 
      // the answer starting from the end is smaller then the current one
      if (dictionarySet.has(substring)) {
        answer = Math.min(answer, calculateMinExtraChars(end + 1));
      }
    }

    memo.set(start, answer);
    return answer;
  }

  return calculateMinExtraChars();
};