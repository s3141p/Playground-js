// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prevLevel = [1]

    for (let i = 1; i < rowIndex+1; i++) {
        const level = [1, ];

        for (let j = 1; j < i; j++) {
            level.push(prevLevel[j] + prevLevel[j - 1]);
        }

        level.push(1)
        prevLevel = level;
    }
    return prevLevel;
};
