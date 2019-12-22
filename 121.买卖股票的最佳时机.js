/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        let temp = prices[i] - min;
        if (temp > 0) {
            result = Math.max(result, temp);
        }
        min = Math.min(min, prices[i]);
    }
    return result;
};
