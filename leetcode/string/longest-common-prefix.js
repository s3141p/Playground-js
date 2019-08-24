// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }

    let prefix = strs[0].split('');

    for (let i = 1; i < strs.length; i++) {
        let a = strs[i];
        let max = Math.max(a.length, prefix.length);

        for (let j = 0; j < max; j++) {
            if (a[j] !== prefix[j]) {
                prefix.splice(j, prefix.length - j + 1);
                break;
            }
        }
    }

    return prefix.join('');
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']), '');
console.log(longestCommonPrefix(['a']), 'a');
console.log(longestCommonPrefix(['a', 'a', 'b']), '');
console.log(longestCommonPrefix(['a', 'b']), '');
console.log(longestCommonPrefix(['abca', 'aba', 'aaab']), 'a');
console.log(longestCommonPrefix(['acc', 'aaa', 'aaba']), 'a');
console.log(longestCommonPrefix(["aa","a"]), 'a');
