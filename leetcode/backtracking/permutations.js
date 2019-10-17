// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//     const result = [];
//
//     for (let i = 0; i < nums.length; i++) {
//         backtrack(nums, result, i, []);
//     }
//
//     return result;
// };
//
// function backtrack(nums, result, startIndex, tempArr) {
//     const num = nums[startIndex];
//     const newTempArr = [...tempArr, num];
//
//     if (newTempArr.length === nums.length) {
//         result.push(newTempArr);
//         return;
//     }
//
//     let index = startIndex;
//
//     for (let i = 0; i < nums.length - 1; i++) {
//         index = (index + 1) % nums.length;
//
//         if (newTempArr.findIndex(item => item === nums[index]) >= 0) {
//             continue;
//         }
//
//         backtrack(nums, result, index, newTempArr);
//     }
// }

var permute = function (nums) {
    const result = [];
    const map = {};

    backtrack(nums, result, [], map);

    return result;
};

function backtrack(nums, result, temp, map) {
    if (temp.length === nums.length) {
        return result.push(temp.slice());
    }

    for (const num of nums){
        if(!map[num]){
            temp.push(num);
            map[num] = true;

            backtrack(nums, result, temp, map);
            temp.pop();
            map[num] = false;
        }
    }
}
console.log(permute([1,2,3]));
