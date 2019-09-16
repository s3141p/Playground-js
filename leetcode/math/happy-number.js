// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const map = {};

    while (n !== 1) {

        if (map[n]) {
            return false;
        }

        map[n] = true;

        n = n.toString().split('').reduce((accum, next) => {
            return accum += Math.pow(next, 2);
        }, 0);
    }

    return true;
}


console.log(isHappy(19), true)
