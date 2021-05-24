/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    let carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }
  return a;
};


getSum(2, 3);
