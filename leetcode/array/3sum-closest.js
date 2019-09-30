// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const sorted = nums.sort((a, b) => a - b);
    let closest = sorted[0] + sorted[1] + sorted[2];
    for (let i = 0; i < sorted.length - 2; i++) {
        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const current = sorted[left] + sorted[i] + sorted[right];

            if (Math.abs(current - target) < Math.abs(closest - target)) {
                closest = current;
            }

            if (current === target) {
                return target;
            } else if (current < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1), 2);
console.log(threeSumClosest([0, 1, 2], 0), 3);
console.log(threeSumClosest([0, 2, 1, -3], 1), 0);
console.log(threeSumClosest([1, 1, -1, -1, 3], -1), -1);
console.log(threeSumClosest([1, 1, 1, 0], 100), 3);
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2), -2);
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82), 2);
