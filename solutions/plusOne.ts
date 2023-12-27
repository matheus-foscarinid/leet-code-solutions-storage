function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    // This solution made me look dumb , if the number is lower than 9 we can just
    // add +1 to it and return digits
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    // but if its 10 (because can only be 10) just change it to 0 and 
    // the other condition will take the rest, else it will add a 1 at 
    // the array start after the for 🤯
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};