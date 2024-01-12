function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  for (let i = 0; i <= n; i++) {
    const num = n[i]

    if (num % 3 === 0 && num % 5 === 0) answer.push('FizzBuzz');
    else if (num % 3 === 0) answer.push('Fizz');
    else if (num % 5 === 0) answer.push('Buzz');
    else answer.push(`${i}`);
  }

  return answer;
};