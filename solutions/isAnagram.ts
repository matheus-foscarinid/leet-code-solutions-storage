function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // we could make the map with fixed size using the alphabet length
  // so the space complexity would be O(1), but in practice it would be slower
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
  for (let i = 0; i < s.length; i++) tMap.set(s[i], (tMap.get(s[i]) || 0) + 1)

  for (const [key, value] of sMap) {
    if (value !== tMap.get(key)) return false;
  }

  return true;
};