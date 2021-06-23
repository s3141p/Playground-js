// https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  if (s[0] === '0') {
    return 0;
  }

  for (let i = 2; i < s.length + 1; i++) {
    let strIndex = i - 1;
    let single = parseInt(s[strIndex]);
    let double = parseInt(s.slice(strIndex - 1, strIndex + 1));
    let current = 0;

    if (single > 0 && single <= 9) {
      current += dp[i - 1];
    }

    if (double >= 10 && double <= 26) {
      current += dp[i - 2];
    }

    dp[i] = current;
  }

  return dp[dp.length - 1];
};

// console.log(numDecodings('0'));
// console.log(numDecodings('12'));
console.log(numDecodings('22625'));
// console.log(numDecodings('226'));
// console.log(numDecodings('06'));
// console.log(numDecodings('111111111111111111111111111111111111111111111'));
