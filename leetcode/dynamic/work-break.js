/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i >= word.length && s.substr(i - word.length, word.length) === word) {
        dp[i] = dp[i - word.length] || dp[i];
      }
    }
  }

  return dp[s.length];
};

// console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
