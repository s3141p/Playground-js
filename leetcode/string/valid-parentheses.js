/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openRound = '(';
    const closeRound = ')';
    const openCurve = '{';
    const closeCurve = '}';
    const openBracket = '[';
    const closeBracket = ']';
    const stack = [];


    function isOpen(char) {
        return char === openRound
            || char === openCurve
            || char === openBracket;
    }

    function isClose(char) {
        return !isOpen(char);
    }

    function sameType(open, close) {
        const round = open === openRound && close === closeRound;
        const curve = open === openCurve && close === closeCurve;
        const bracket = open === openBracket && close === closeBracket;
        return round || curve || bracket;
    }

    if (s.length === 0) {
        return true;
    }

    if (isClose(s[0])) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let previous = stack[stack.length - 1];

        if (isOpen(current)) {
            stack.push(current);
        } else if (isClose(current) && sameType(previous, current)) {
            stack.pop()
        } else {
            return false;
        }
    }

    return stack.length > 0 ? false : true;
};

let data1 = '()';
let data2 = '()[]{}';
let data3 = '(]';
let data4 = '([)]';
let data5 = '{[]}';
let data6 = '{[]}{}';

console.log(isValid(data1))
console.log(isValid(data2))
console.log(isValid(data3))
console.log(isValid(data4))
console.log(isValid(data5))
console.log(isValid(data6))
