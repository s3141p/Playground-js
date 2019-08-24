// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;

    while (true) {
        if (i * i > x) {
            return i - 1;
        } else {
            i++
        }
    }
};


var binarySqrt = function (x) {
    let start = 0;
    let end = x;
    let res = 0;
    while (start < end) {
        res = Math.ceil((start + end)/2); // 1.
        if (res*res <= x && (res + 1)*(res + 1) > x) return res; // 2.
        if (res*res < x) start = res; // 3.
        else end = res; // 4.
    }
};


console.log(mySqrt(4), 2);
console.log(mySqrt(8), 2);
console.log(mySqrt(121), 11);
