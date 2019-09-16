// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     let sumOdd = 0;
//     let sumEven = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0 || i % 2 === 0) {
//             sumEven += nums[i];
//         } else {
//             sumOdd += nums[i];
//         }
//     }
//
//     return Math.max(sumEven, sumOdd);
// };

var rob = function (nums) {
    if(nums.length === 1) {
        return nums[0];
    }

    if(nums.length === 2){
        return Math.max(nums[0], nums[1]);
    }

    let prev1 = nums[0];
    let prev2 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let max = Math.max(nums[i] + prev1, prev2);
        prev1 = prev2;
        prev2 = max;
    }

    return prev2;
};

console.log(rob([2, 7, 9, 3, 1]), 12);
console.log(rob([2, 1, 1, 2]), 4);
console.log(rob([1, 7, 9, 4]), 11);
