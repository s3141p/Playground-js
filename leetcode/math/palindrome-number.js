// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let result = 0;
    let copy = x;

    while (x > 0) {
        let pop = x % 10;
        result = result * 10 + pop;
        x = Math.trunc(x / 10);
    }
    return result === copy;
};

console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(10), false);
