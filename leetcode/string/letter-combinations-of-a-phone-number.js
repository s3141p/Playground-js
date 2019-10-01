// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }

    let result = [''];

    for (const digit of digits) {
        result = backtrack(result, digit);
    }

    return result;
};

const nums = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};


function backtrack(input, digit) {
    const output = [];

    for (const letter of nums[digit]) {
        for (const combination of input) {
            output.push(combination + letter);
        }
    }

    return output;
}



console.log(letterCombinations('23'), [ 'ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf' ])


