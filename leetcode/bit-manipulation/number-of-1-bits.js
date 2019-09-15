// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function (n) {
//     const str = n.toString(2);
//     let counter = 0;
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 1) counter++;
//     }
//
//     return counter;
// };

var hammingWeight = function (n) {
    let result = 0;

    while (n !== 0) {
        result = result + (n & 1);
        n = n >>> 1;
    }

    return result;
};

// 11 (base 10) = 00000000000000000000000000001011 (base 2)
console.log(hammingWeight(11), 3);
