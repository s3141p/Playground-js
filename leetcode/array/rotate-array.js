// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//     const times = k % nums.length;
//
//     for (let i = times; i > 0; i--) {
//         nums.unshift(nums.pop());
//     }
// };

var rotate = function (nums, k) {
    const times = k % nums.length;
    let count = 0;
    for (let i = 0; count < nums.length; i++) {
        let currentIndex = i;
        let currentValue = nums[i];
        do {
            const nextIndex = (currentIndex + times) % nums.length;
            const tempValue = nums[nextIndex];
            nums[nextIndex] = currentValue;
            currentValue = tempValue;
            currentIndex = nextIndex;
            count++;
        } while (i !== currentIndex);
    }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])

// [1, 2, 3, 4, 5, 6, 7] i = 0
    // [1, 2, 3, 1, 5, 6, 7] currentIndex: 0, nextIndex: 3, t: 4
    // [1, 2, 3, 1, 5, 6, 4] currentIndex: 3, nextIndex: 6, t: 7
    // [1, 2, 7, 1, 5, 6, 4] currentIndex: 6, nextIndex: 2, t: 3
    // [1, 2, 7, 1, 5, 3, 4] currentIndex: 2, nextIndex: 5, t: 6
    // [1, 6, 7, 1, 5, 3, 4] currentIndex: 5, nextIndex: 1, t: 2
    // [1, 6, 7, 1, 2, 3, 4] currentIndex: 4, nextIndex: 0, t: 5
    // [5, 6, 7, 1, 2, 3, 4] currentIndex: 0, nextIndex: 1, t: 2


