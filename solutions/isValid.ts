const BRACKETS_MAP = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const c of s) {
    if (['{', '[', '('].includes(c)) stack.push(BRACKETS_MAP[c]) 
    else if (!stack.length || stack.pop() !== c) return false
  }

  return !stack.length
};