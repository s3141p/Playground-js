// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let occurence = {};

  for (let i = 0; i < t.length; i++) {
    addOccurence(occurence, t[i]);
  }

  let left = 0;
  let right = 0;
  let totalNeedMatch = Object.keys(occurence).length;
  let needMatch = 0;
  let minWindow = '';
  let minLength = Number.MAX_SAFE_INTEGER;
  let currentOccurence = {};

  while (right < s.length) {
    addOccurence(currentOccurence, s[right]);

    if (occurence[s[right]] && occurence[s[right]] === currentOccurence[s[right]]) {
      needMatch++;
    }

    while (needMatch === totalNeedMatch && left <= right) {
      let windowSize = right - left + 1;

      if (windowSize < minLength) {
        minWindow = s.substring(left, right + 1);
        minLength = minWindow.length;
      }

      currentOccurence[s[left]]--;

      if (occurence[s[left]] && occurence[s[left]] > currentOccurence[s[left]]) {
        needMatch--;
      }

      left++;
    }

    right++;
  }

  return minWindow;
};

function addOccurence(map, char) {
  if (map[char]) {
    map[char]++;
  } else {
    map[char] = 1;
  }
}

// console.log(minWindow('aaat', 't'));
console.log(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'));
