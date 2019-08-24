// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */


// for (let i = 0; i < nums.length - 1; i++) {
//     let a = nums[i];
//     let b = nums[i + 1];
//
//     if (a + 1 !== b) {
//         return a + 1;
//     }
// }
// return nums[0] === 0 ? 1: 0;

var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b);
    if (nums[0] !== 0) {
        return 0;
    }

    if (nums[nums.length - 1] !== nums.length) {
        return nums.length;
    }

    for (let i = 1; i < nums.length; i++) {
        let expected = nums[i - 1] + 1;

        if (nums[i] !== expected) {
            return expected;
        }
    }
};

const data0 = [3, 0, 1];
const expected0 = 2;

const data1 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const expected1 = 8;

const data2 = [0, 1];
const expected2 = [2];

const data3 = [0];
const expected3 = [1];

console.log(missingNumber(data0));
console.log(missingNumber(data1));
console.log(missingNumber(data2));
console.log(missingNumber(data3));

