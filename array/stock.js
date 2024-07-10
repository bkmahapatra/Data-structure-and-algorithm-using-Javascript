/**
 * Stock buy and sell problem
 *  Time: θ(n), Aux space: θ(1)
 */

function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}

console.log(maxProfit([1, 5, 3, 8, 12]));
console.log(maxProfit([20, 16, 12])); //no profit -decrasing
console.log(maxProfit([10, 20, 30])); //max profit -increasing
