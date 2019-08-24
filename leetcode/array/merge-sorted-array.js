// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m -= 1;
    n -= 1;

    while (n >= 0) {
        nums1[insertPos] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
        insertPos--;
    }
};

merge(
    [1, 2, 3, 0, 0, 0],
    3,
    [4, 5, 6],
    3
);

merge(
    [100, 200, 300, 0, 0, 0],
    3,
    [4, 5, 6],
    3
);
