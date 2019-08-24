// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            const currentMax = prices[j] - prices[i];

            if (currentMax > maxProfit) {
                maxProfit = currentMax;
            }
        }
    }

    return maxProfit;
};

var maxProfit1 = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice){
            minPrice = prices[i]
        } else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};


// const prices = [7, 1, 5, 3, 6, 4]
const prices = [7, 5, 5, 1, 6, 4]

let res = maxProfit(prices);

