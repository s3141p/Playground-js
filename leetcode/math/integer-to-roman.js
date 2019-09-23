// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = [
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
    ];

    let result = [];
    let i = map.length - 1;

    while (num !== 0) {
        const [int, roman] = map[i];
        const [nextDigit, nextDigitRoman] = i > 0 ? map[i % 2 === 0 ? i - 2 : i - 1] : map[0];
        let times = Math.trunc(num / int);

        if (times === 0 && int - num <= nextDigit) {
            result.push(nextDigitRoman, roman);
            num = num % nextDigit;
        } else {
            while (times !== 0) {
                result.push(roman);
                times--;
            }

            num = num % int;
            int - num <= nextDigit ? i : i--;
        }

    }

    return result.join('');

};


console.log(intToRoman(9));
console.log(intToRoman(4));
console.log(intToRoman(994), 'CMXCIV');
console.log(intToRoman(1994), 'MCMXCIV');
console.log(intToRoman(58));


