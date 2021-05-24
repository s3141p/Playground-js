// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
  let res = [0]
  for(let i = 1; i <= num; i++){
      res[i] = res[Math.floor(i/2)] + Math.floor(i%2)
  }
  return res
};

console.log(countBits(7));