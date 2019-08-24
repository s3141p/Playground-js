// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];

        if (prev < current) {
            profit += current - prev;
        }
    }

    return profit
};

// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7)
console.log(maxProfit([1, 2, 3, 4, 5]), 4)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
console.log(maxProfit([20, 1, 10, 15, 35, 10, 100]), 7)
