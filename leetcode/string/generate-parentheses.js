// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const arr = [];
    compose(n, n, '', arr);
    return arr;
};

function compose(left, right, str, arr) {
    if (!left && !right && str.length) {
        return arr.push(str);
    }

    if (left) {
        compose(left - 1, right, str + '(', arr);
    }

    if (right > left) {
        compose(left, right - 1, str + ')', arr);
    }
}


console.log(
    generateParenthesis(2),
    [
        '()()',
        '(())'
    ]
)

console.log(
    generateParenthesis(3),
    [
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()'
    ]
)
