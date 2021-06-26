// https://leetcode.com/problems/unique-paths/submissions/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function (m, n, cache = {}, mIndex = 0, nIndex = 0) {
    const index = str(mIndex, nIndex);

    if (mIndex === m - 1 && nIndex === n - 1) {
        return 1;
    }

    if (mIndex >= m || nIndex >= n) {
        return 0;
    }

    if (cache[index]) {
        return cache[index];
    }

    const pathes = uniquePaths(m, n, cache, mIndex, nIndex + 1) +
        uniquePaths(m, n, cache, mIndex + 1, nIndex);

    cache[index] = pathes;

    return pathes;
};

function str(m, n) {
    return m + ',' + n;
}

console.log(uniquePaths(3, 7));