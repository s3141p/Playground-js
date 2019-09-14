// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const num = s.charCodeAt(i) - 64;
        result += num * Math.pow(26, s.length - 1 - i);
    }

    return result;
};

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28

console.log(titleToNumber('A'), 1);
console.log(titleToNumber('C'), 3);
console.log(titleToNumber('Z'), 26);
console.log(titleToNumber('ZY'), 701);
