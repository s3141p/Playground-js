// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const slices = [];
    const itemsInSlice = ((numRows * 2) - 2 || 1);
    const count = Math.ceil(s.length / itemsInSlice);
    let result = '';

    for (let i = 0; i < count; i++) {
        let start = i * itemsInSlice;

        slices.push(
            s.substr(start, itemsInSlice)
        );
    }

    for (let i = numRows; i > 0; i--) {
        const range = (i * 2) - 2;
        const shift = numRows - i;

        for (let j = 0; j < slices.length; j++) {
            const slice = slices[j];

            if(slice[shift]){
                result += slice[shift];
            }

            if (range > 0 && slice[range + shift]) {
                result += slice[range + shift];
            }
        }
    }

    return result;
};

console.log(convert('PAYPALISHIRING', 3) ==='PAHNAPLSIIGYIR')
console.log(convert('PAYPALISHIRING', 4) ==='PINALSIGYAHRPI')
console.log(convert('PAYPALISHIRING', 5) ==='PHASIYIRPLIGAN')
console.log(convert('A', 1) === 'A')
