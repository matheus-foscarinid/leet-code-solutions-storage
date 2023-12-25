const CHAR_MAPPER = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romanToInt(s: string): number {
  let finalValue = 0;

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    const charValue = CHAR_MAPPER[char]
    
    const nextChar = s[i + 1];
    const nextCharValue = CHAR_MAPPER[nextChar]; 

    if (charValue < nextCharValue) {
      finalValue += (nextCharValue - charValue);
      i++;
    } else {
      finalValue += charValue
    }
  }

  return finalValue;
};