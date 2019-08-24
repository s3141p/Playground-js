/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const maxStr = a.length >= b.length ? a : b;
    const minStr = a.length < b.length ? a : b;

    const diff = maxStr.length - minStr.length;
    const result = [];

    let toAdd = 0;
    let i = maxStr.length - 1;

    while (i >= 0 || toAdd > 0) {
        const numA = parseInt(maxStr[i])
        const numB = minStr[i - diff] ? parseInt(minStr[i - diff]) : 0;
        sum = xor(numB, numA);

        if (toAdd) {
            toAdd = 0;
            sum = xor(sum, 1);
            if (sum === 0) {
                toAdd = 1;
            }
        }

        if (numA === 1 && numB === 1) {
            toAdd = 1;
        }

        result.unshift(sum);
        i--;
    }

    return result.join('');
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


console.log(addBinary('11', '1'), '100');
console.log(addBinary('1010', '1011'), '10101');
