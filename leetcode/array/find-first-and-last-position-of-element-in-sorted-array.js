// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let firstIndex = findIndex(nums, target, true);
    let endIndex = findIndex(nums, target, false);

    return [firstIndex, endIndex];
};

function findIndex(nums, target, left) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let diff = end - start;
        let middle = start + Math.trunc(diff / 2);

        if (target < nums[middle]) {
            end = middle - 1;
        }

        if (target > nums[middle]) {
            start = middle + 1;
        }

        if (nums[middle] === target) {
            index = middle;

            if (left) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }

    }
    return index;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
console.log(searchRange([5, 8, 8, 9, 10], 8), [1, 2]);
console.log(searchRange([8, 8, 8, 8, 8], 8), [0, 4]);
console.log(searchRange([1, 8, 8, 8, 8, 8, 9], 8), [1, 5]);
console.log(searchRange([1, 8, 8, 8, 8, 8, 9], 3), [-1, -1]);
