// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let toSum = 1;
    let result = [];
    let i = digits.length - 1;

    while (i >= 0 || toSum > 0) {
        const nextDigit = i >= 0 ? digits[i] : 0;
        const afterSum = nextDigit + toSum;

        if (afterSum === 10) {
            result.unshift(0);
        } else {
            toSum = 0;
            result.unshift(afterSum)
        }

        i--;
    }

    return result;
};


console.log(plusOne([1, 2, 3]), [1, 2, 4]);
console.log(plusOne([1, 9, 9]), [2, 0, 0]);
console.log(plusOne([9, 9, 9]), [1, 0, 0, 0]);
