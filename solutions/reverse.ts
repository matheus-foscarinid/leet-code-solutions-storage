function reverse(x: number): number {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);

  let curr = x;
  let answer = 0;

  while (curr > 0) {
    const n = curr % 10;
    curr = Math.floor((curr - n) / 10);
    answer  = answer * 10 + n;
    if (maxInt < answer || minInt > answer) return 0;
  }

  return x > 0 ? answer : -answer;
};