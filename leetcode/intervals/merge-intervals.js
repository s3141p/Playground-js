// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let recent = result[result.length - 1];
        let a = intervals[i];

        if (isOverlapping(recent, a)) {
            result[result.length - 1] = [Math.min(a[0], recent[0]), Math.max(a[1], recent[1])];
        } else {
            result.push(a);
        }
    }

    return result;
};

function mergeInterval(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function isOverlapping(a, b) {
    return Math.max(a[0], b[0]) <= Math.min(a[1], b[1]);
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [0, 4]]));
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));



