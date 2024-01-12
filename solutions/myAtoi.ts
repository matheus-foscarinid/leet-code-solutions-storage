function myAtoi(s: string): number {
  let result = 0;
  let curr = s.trim();

  const isSignal = curr[0] === '+' || curr[0] === '-';
  const isNegative = curr[0] === '-';
  if (isSignal) curr = curr.substring(1);

  for (let i = 0; i < curr.length; i++) {
    if (!/[0-9]/.test(curr[i])) break;
    
    const digit = parseInt(curr[i]);
    result = (result * 10) + digit;
  }  

  return isNegative 
    ? Math.max(-(2 ** 31), -result) 
    : Math.min((2 ** 31) - 1, result);
};