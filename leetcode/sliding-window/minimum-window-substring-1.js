// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let n = s.length;
  let min = Number.MAX_VALUE;
  let minWindow = '';

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let window = s.substring(i, j + 1);

      if (containsAll(window, t) && window.length < min) {
        min = window.length;
        minWindow = window;
      }
    }
  }

  return minWindow;
};

function containsAll(s, t) {
  const map = {};

  for (let letter of s) {
    map[letter] ? map[letter]++ : (map[letter] = 1);
  }

  for (let letter of t) {
    if (!map[letter] || map[letter] === 0) {
      return false;
    }
    map[letter]--;
  }

  return true;
}
