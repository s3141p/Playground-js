// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = [];

    function climb(current, total) {
        if (current > total) {
            return 0;
        }
        if (current === total) {
            return 1;
        }
        if (memo[current] > 0) {
            return memo[current]
        }
        return memo[current] = climb(current + 1, total) + climb(current + 2, total);
    }

    return climb(0, n);
};


console.log(climbStairs(3));
