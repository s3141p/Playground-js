// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => parseInt(a / b),
  };

  for (let token of tokens) {
    if (!operations[token]) {
      stack.push(parseInt(token));
      continue;
    }

    let b = stack.pop();
    let a = stack.pop();
    stack.push(operations[token](a, b));
  }

  return stack[0];
};

const tokens = ['2', '1', '+', '3', '*'];
const tokens1 = ['4', '13', '5', '/', '+'];
const tokens2 = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

console.log(evalRPN(tokens2));
