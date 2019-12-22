var maxProfit = function (prices) {
    let currentMin = prices[0];
    let sum = 0;
    // 连续递增则买入卖出
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            // 如果已经到最后，则直接相减
            if (i === prices.length-1) {
                let tempVal = prices[i]-currentMin;
                sum += tempVal<0? 0: tempVal;
            }
        } else {
            let tempVal = prices[i-1]-currentMin;
            sum += tempVal<0? 0: tempVal;
            currentMin = prices[i];
        }
    }

    return sum;
};