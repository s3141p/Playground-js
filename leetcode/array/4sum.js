// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }


            let left = j + 1;
            let right = nums.length - 1;
            twoSum(nums, result, left, right, target, nums[i], nums[j])
        }
    }

    return result
};

function twoSum(nums, result, from, to, target, num1, num2) {

    while (from < to) {
        const sum = nums[from] + nums[to] + num1 + num2;
        if ((num1 + num2 + nums[from] + nums[to]) === target) {
            result.push([num1, num2, nums[from], nums[to]]);
            from++;

            while (from < to && nums[from] === nums[from - 1]) {
                from++;
            }
        } else if (sum < target) {
            from++;
        } else {
            to--;
        }
    }
}


// console.log(
//     fourSum(
//         [1, 0, -1, 0, -2, 2],
//         0
//     ),
//     [
//         [-2, -1, 1, 2],
//         [-2, 0, 0, 2],
//         [-1, 0, 0, 1]
//     ]
// );

// console.log(
//     fourSum(
//         [-3, -2, -1, 0, 0, 1, 2, 3],
//         0
//     )
// );

console.log(
    fourSum(
        [0, 0, 0, 0],
        0
    )
);


