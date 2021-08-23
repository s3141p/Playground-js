/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    const result = [];
    let wasInserted = false;

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];

        if (isIntersected(interval, newInterval)) {
            wasInserted = true;
            let j = i + 1;
            for (; j < intervals.length && isIntersected(intervals[j], newInterval); j++) {
            }
            i = j - 1;
            result.push([Math.min(interval[0], newInterval[0]), Math.max(intervals[j - 1][1], newInterval[1])])
            continue;
        }

        const isFirst = i === 0;

        if (isFirst && newInterval[1] < interval[0]) {
            wasInserted = true;
            result.push(newInterval, interval);
            continue;
        }

        const isLast = i === intervals.length - 1;

        if (!wasInserted && interval[1] < newInterval[0] && isLast) {
            result.push(interval, newInterval)
            break;
        }

        const nextInterval = intervals[i + 1];

        if (!wasInserted && interval[1] < newInterval[0] && newInterval[1] < nextInterval[0]) {
            wasInserted = true;
            result.push(interval, newInterval);
            continue
        }

        result.push(interval)
    }

    return result
};

function isIntersected(a, b) {
    return Math.max(a[0], b[0]) <= Math.min(a[1], b[1])
}


console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
console.log(insert([[1, 5]], [0, 0]))


