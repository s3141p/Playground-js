// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;
    let count = 32;

    while (count--) {
        result = result << 1;
        result += n & 1;
        n = n >> 1;
    }

    return result >>> 0;
};

// 1001100000000000000000000000000
// -1101000000000000000000000000000
// 10011000000000000000000000000000
// 10011000000000000000000000000000
console.log(reverseBits(25));


