// https://leetcode.com/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (text1, text2) {
  const table = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        table[i + 1][j + 1] = 1 + table[i][j];
      } else {
        table[i + 1][j + 1] = Math.max(table[i][j + 1], table[i + 1][j]);
      }
    }
  }

  return table[text1.length][text2.length];
};

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence('abcba', 'abcbcba'));

/**
 * Recursive
 */
var longestCommonSubsequenceRec = function (
  text1,
  text2,
  n = text1.length - 1,
  m = text2.length - 1,
) {
  if (n === -1 || m === -1) {
    return 0;
  }

  if (text1[n] === text2[m]) {
    return 1 + longestCommonSubsequence(text1, text2, n - 1, m - 1);
  } else {
    return Math.max(
      longestCommonSubsequence(text1, text2, n - 1, m),
      longestCommonSubsequence(text1, text2, n, m - 1),
    );
  }
};
