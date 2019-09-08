// https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let title = '';

    while (n > 0) {
        let rem = (n - 1) % 26;
        n = (n - 1 - rem) / 26;
        title = String.fromCharCode(65 + rem) + title;
    }
    return title;
};
// console.log(convertToTitle(1), 'A');
// console.log(convertToTitle(26), 'Z');
// console.log(convertToTitle(27), 'AA');
// console.log(convertToTitle(28), 'AB');
// console.log(convertToTitle(52), 'AZ');
// console.log(convertToTitle(53), 'BA');
console.log(convertToTitle(701), 'ZY');

// 26 = Z
// 27 = AA
// 28 = AB
// 52 = AZ
// 53 = BA
