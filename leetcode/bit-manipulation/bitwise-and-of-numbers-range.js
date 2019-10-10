// https://leetcode.com/problems/bitwise-and-of-numbers-range

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
    let count = 0;

    while (m && m !== n) {
        count += 1;
        m = m >> 1;
        n = n >> 1;
    }
    return m << count;
};

console.log(rangeBitwiseAnd(5, 7));
