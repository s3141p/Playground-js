// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0;
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(2, 31) * -1;
    while (x != 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);

        if (num > max / 10 || num < min / 10) {
            return 0;
        }

        num = num * 10 + pop;
    }

    return num
};
let res = reverse(1534236469);
console.log(res);
