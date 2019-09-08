// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (numbers[start] + numbers[end] != target) {
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }

    return [start + 1, end + 1]
};


console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);
