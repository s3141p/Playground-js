// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let numberFound = false;
    let sign = 1;
    const nums = [];

    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const isNumber = isNum(current);
        const isPlus = current === '+';
        const isMinus = current === '-';
        const isEmpty = current === ' ';
        const isAlpha = !isNumber && !isEmpty && !isMinus && !isPlus;

        if (!numberFound) {
            if (isAlpha) {
                return 0;
            }

            if (isPlus) {
                numberFound = true;
                continue;
            }

            if (isMinus) {
                sign = -1;
                numberFound = true;
                continue;
            }

            if (isNumber) {
                numberFound = true;
                nums.unshift(current);
                continue;
            }
        }

        if (numberFound) {
            if (isNumber) {
                nums.unshift(current);
            }

            if (!isNumber) {
                return toNum(nums, sign);
            }
        }
    }

    return toNum(nums, sign)
};

function isNum(char) {
    const numsAsciiStart = 48;
    const numsAsciiEnd = 57;
    return char.charCodeAt(0) >= numsAsciiStart
        && char.charCodeAt(0) <= numsAsciiEnd;
}


function toNum(arr, sign) {
    if (arr.length === 0) {
        return 0;
    }
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);
    let num = +arr[0];

    for (let i = 1; i < arr.length; i++) {
        num += arr[i] * Math.pow(10, i);

        if (num * sign > max) {
            return max;
        }

        if (num * sign < min) {
            return min;
        }
    }

    return num * sign;
}

console.log(myAtoi('42') === 42);
console.log(myAtoi('   -42') === -42);
console.log(myAtoi('   -4340') === -4340);
console.log(myAtoi('4193 with words') === 4193);
console.log(myAtoi('words and 987') === 0);
console.log(myAtoi('-91283472332') === -2147483648);
console.log(myAtoi('-2147483646') === -2147483646);
console.log(myAtoi('-01324000') === -1324000);
console.log(myAtoi('2147483649') === 2147483647);

// max = 214748364
// current = 214748364

// if(current > max || current === max && current+1 > 7){
//     return MAX;
// }
