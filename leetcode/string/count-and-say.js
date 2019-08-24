// https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1';
    }

    let count = 1;
    let result = '';
    const str = countAndSay(n - 1);

    for (let i = 0; i < str.length; i++) {
        let isNotLast = i < str.length - 1;
        let current = str[i];
        let next = isNotLast ? str[i + 1] : null;

        if (current === next) {
            count++;
        } else {
            result += count + '' + current;
            count = 1;
        }
    }

    return result;
}


console.log(countAndSay(1), '1')
console.log(countAndSay(2), '11')
console.log(countAndSay(3), '21')
console.log(countAndSay(4), '1211')
console.log(countAndSay(5), '111221')
