// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount, cache = {}) {
  if (cache[amount]) {
    return cache[amount];
  }

  if (amount == 0) {
    return 0;
  }

  if (amount < 0) {
    return -1;
  }

  const min = [];

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];

    let localMin = coinChange(coins, amount - coin, cache);

    if (localMin === -1) {
      continue;
    }

    min.push(localMin + 1);
  }

  cache[amount] = min.length > 0 ? Math.min(...min) : -1;
  return cache[amount];
};

console.log(coinChange([186, 419, 83, 408], 6249));
