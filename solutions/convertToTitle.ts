const ALPHABET_LENGTH = 26;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function convertToTitle(columnNumber: number): string {
  let result = '';

  const repeats = Math.floor(columnNumber / ALPHABET_LENGTH);
  const rest = columnNumber % ALPHABET_LENGTH;

  if (!repeats) return alphabet[rest - 1];
  return alphabet[repeats - 1] + alphabet[rest - 1];
};

console.log(convertToTitle(647));