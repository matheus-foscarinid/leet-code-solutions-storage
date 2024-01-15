
function generateParenthesis(n: number): string[] {
  const answers: string[] = [];

  const backtrack = (current: string, openCount: number, closeCount: number) => {
    if (current.length === n * 2) {
      answers.push(current);
      return;
    }

    if (openCount < n) backtrack(current + '(', openCount + 1, closeCount);
    if (openCount !== closeCount) backtrack(current + ')', openCount, closeCount + 1);
  };

  backtrack('', 0, 0);
  return answers;
};