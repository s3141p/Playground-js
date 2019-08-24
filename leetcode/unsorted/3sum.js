// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let prevA = i > 0 ? nums[i - 1] : null;

        if (a === prevA) {
            continue
        }

        for (let j = i + 1; j < nums.length; j++) {
            let prevB = j >= i + 2 ? nums[j - 1] : null;
            let b = nums[j];

            if (b === prevB) {
                continue
            }

            for (let k = j + 1; k < nums.length; k++) {
                let prevC = k >= j + 2 ? nums[k - 1] : null;
                let c = -a - b;

                if (c === prevC) {
                    continue
                }

                if (nums[k] === c) {
                    res.push([a, b, c]);
                }
            }
        }
    }
    return res;
};


const threeSumImproved = function (nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let prevA = i !== 0 ? nums[i - 1] : null;
        let j = i + 1;
        let k = nums.length - 1;

        if (a === prevA) {
            continue
        }

        while (j < k) {
            let b = nums[j];
            let c = nums[k];

            if (a + b + c === 0) {
                res.push([a, b, c]);
                j++;

                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }

            } else if ((a + b + c) < 0) {
                j++;
            } else {
                k--;
            }
        }

    }
    return res;
};


const data0 = [0, 0, 0, 0];
const data0Expected = [[0, 0, 0]];

const data1 = [-1, 0, 1, 2, -1, -4];
const data1Expected = [
    [-1, -1, 2],
    [-1, 0, 1],
];
