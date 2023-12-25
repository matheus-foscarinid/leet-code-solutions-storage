function maxLengthBetweenEqualCharacters(s: string): number {
    let answer = -1;
    for (let i = 0; i < s.length; i++) {
      const iChar = s[i];
      for (let j = i; j < s.length; j++) {
        const jChar = s[j]
        if (iChar === jChar) answer = Math.max(answer, j - i - 1)
      }
    }

    return answer
};