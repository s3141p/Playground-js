// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let used = new Map();
    let longest = 0;
    let current = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (!used.has(s[i])) {
            current++;
            used.set(s[i]);
        } else {
            used.clear();

            if (longest < current) {
                longest = current;
            }

            current = 0;
            i = start;
            start++;
        }

    }

    return Math.max(longest, current);
};

var lengthOfLongestSubstringImproved = function (s) {
    let length = s.length;
    let used = new Map();
    let result = 0;
    let startIndex = 0;

    for (let i = 0; i < length; i++) {
        const current = s[i];
        if (used.has(current)) {
            startIndex = Math.max(used.get(current), startIndex);
        }
        used.set(s[i], i + 1);
        result = Math.max(result, i - startIndex + 1);
    }
    return result;
};

let test1 = 'abcabcbb';
let test2 = 'bbbbb';
let test3 = 'pwwkew';
let test4 = 'anviaj';
let test5 = 'fobar';
let test6 = 'dvdf';

console.log(lengthOfLongestSubstringImproved(test1), 3);
console.log(lengthOfLongestSubstringImproved(test2), 1);
console.log(lengthOfLongestSubstringImproved(test3), 3);
console.log(lengthOfLongestSubstringImproved(test4), 5);
console.log(lengthOfLongestSubstringImproved(test5), 5);
console.log(lengthOfLongestSubstringImproved(test6), 3);
