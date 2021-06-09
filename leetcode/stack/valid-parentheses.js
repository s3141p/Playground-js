/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const match = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    if (!match[s[i]]) {
      stack.push(s[i]);
      continue;
    }

    let left = stack.pop();

    if (match[s[i]] !== left) {
      return false;
    }
  }

  return stack.length === 0;
};

let data1 = '()';
let data2 = '()[]{}';
let data3 = '(]';
let data4 = '([)]';
let data5 = '{[]}';
let data6 = '{[]}{}';

// console.log(isValid(data1));
// console.log(isValid(data2));
console.log(isValid(data3));
// console.log(isValid(data4));
// console.log(isValid(data5));
// console.log(isValid(data6));
