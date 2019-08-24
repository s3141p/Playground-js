// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = [];

    for (let i = 0; i < s.length; i++) {
        if (isAlphaNumeric(s[i])) {
            str.push(s[i].toLocaleLowerCase());
        }
    }

    for (let i = 0; i < str.length; i++) {
        let start = i;
        let end = str.length - 1 - i;
        if (str[start] !== str[end]) {
            return false;
        }
    }
    return true;
};

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'), true);
console.log(isPalindrome("race a car"), false);
