// https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s, cache = {}, index = 0) {
  if (index > s.length) {
    return 0;
  }

  if (index === s.length) {
    return 1;
  }

  if (s[index] === '0') {
    return 0;
  }

  if (cache[index]) {
    return cache[index];
  }

  const max = 26;
  let ways = numDecodings(s, cache, index + 1);

  if (index + 2 <= s.length) {
    const b = parseInt(s.substr(index, 2));

    if (b <= max) {
      ways += numDecodings(s, cache, index + 2);
    }
  }

  return (cache[index] = ways);
};
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"

// console.log(numDecodings('0'));
// console.log(numDecodings('12'));
console.log(numDecodings('226'));
// console.log(numDecodings('226'));
// console.log(numDecodings('06'));
// console.log(numDecodings('111111111111111111111111111111111111111111111'));
