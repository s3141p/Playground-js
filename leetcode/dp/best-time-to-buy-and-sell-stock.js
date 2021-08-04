// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i], min);
    }

    return max;
};


// const prices = [7, 1, 5, 3, 6, 4]
const prices = [7, 5, 5, 1, 6, 4]

let res = maxProfit(prices);
console.log(res);

