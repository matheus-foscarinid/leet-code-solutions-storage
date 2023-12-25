function lengthOfLongestSubstring(s: string): number {
    let answer = 0;
    let blocklist = new Map()
    let currSubstring = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (blocklist.has(char)) {
            blocklist.clear();
            currSubstring = '';
            i = blocklist.get(char)
        } else {
            blocklist.set(char, i);
            currSubstring += char;
        }

        answer = Math.max(currSubstring.length, answer);
    }

    return answer;
};