// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let sum = 0;
    let accum = 0;

    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1] || 0;


        const tens = current === 'I' && (next === 'V' || next === 'X');
        const hundreds = current === 'X' && (next === 'L' || next === 'C');
        const thousands = current === 'C' && (next === 'D' || next === 'M');

        if (current === next) {
            accum += map.get(current);
        } else if (tens || hundreds || thousands) {
            accum += map.get(current);
            sum += map.get(next) - accum;
            accum = 0;
            i++;
        } else if(current !== next) {
            sum += map.get(current) + accum;
            accum = 0;
        } else {
            sum += map.get(current);
        }
    }
    return sum + accum;
};

console.log(romanToInt('III'), 3);
console.log(romanToInt('IV'), 4);
console.log(romanToInt('IX'), 9);
console.log(romanToInt('LVIII'), 58);
console.log(romanToInt('MCMXCIV'), 1994);
console.log(romanToInt('MDCCCLXXXIV'), 1884);
// m = 1000, D = 500, CCC = 300
