// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) {
        return '';
    }

    if (s.length === 1) {
        return s;
    }

    if (s.length === 2) {
        return s[0] === s[1]
            ? s
            : s[0];
    }

    let base2 = findLargestPalindromeByLength(s, 2);
    let base3 = findLargestPalindromeByLength(s, 3)

    if (base2.length === 0 && base3.length === 0) {
        return s[0];
    }

    return base2.length > base3.length
        ? base2
        : base3;
};

function findLargestPalindromeByLength(s, length) {
    let largest = '';

    for (let i = 0; i <= s.length - length; i++) {
        let template = s.substr(i, length);

        if (isPalindrome(template)) {
            template = expand(s, i, i + length - 1);
            largest = template.length > largest.length ? template : largest;
        }
    }

    return largest;
}

function isPalindrome(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--, right++;
    }
    return str.substring(left + 1, right); // $left and $right will be exceeded by 1 until this moment, so we need to shrink it by one before return
}


console.log(longestPalindrome('babcbabcbaccba') === 'abcbabcba');
console.log(longestPalindrome('abaaba') === 'abaaba');
console.log(longestPalindrome('forgeeksskeegfor') === 'geeksskeeg');
console.log(longestPalindrome('ac') === 'a');
console.log(longestPalindrome('bb') === 'bb');
console.log(longestPalindrome('ccc') === 'ccc');
console.log(longestPalindrome('fklkffe'))
