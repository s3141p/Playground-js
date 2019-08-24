// https://leetcode.com/problems/adding-two-negabinary-numbers/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
    let diff = Math.abs(arr1.length - arr2.length);
    let larger = arr1.length >= arr2.length ? arr1 : arr2;
    let less = arr2.length > arr1.length ? arr1 : arr2;
    let i = larger.length - 1;
    let toMinus = 0;
    let result = [];

    while (toMinus > 0 || i >= 0) {
        let num1 = i >= 0 ? larger[i] : null;
        let num2 = i - diff >= 0 ? less[i - diff] : 0;

        if (toMinus === 1) {
            if (num1 === null) {
                result.unshift(1, 1, 0);
                return result;
            } else if (num1 === 1) {
                num1 = 0;
                toMinus = 0
            } else if (num1 === 0) {
                num1 = 1;
            }
        }
        let sum = xor(num1, num2);

        if(sum === 0 && (num1 === 1 || num2 === 1)){
            toMinus = 1;
        }

        result.unshift(sum);
        i--;
    }

    return result;
};

function xor(a, b) {
    if (a === 1 && b === 1) {
        return 0;
    } else if (a === 1 || b === 1) {
        return 1;
    } else {
        return 0;
    }
}

// console.log(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1]));
// console.log(addNegabinary([1], [1, 1]));
console.log(addNegabinary([1], [1, 0, 1]));
