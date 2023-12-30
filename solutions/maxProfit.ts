function maxProfit(prices: number[]): number {
  let minBuy = prices[0];
  let maxProf = 0;

  // Start the loop on 1 because minBuy is already set as the first
  for (let i = 1; i < prices.length; i++) {
    // Update minBuy with the lowest value always
    minBuy = Math.min(minBuy, prices[i]);
    // Base on what is the current minBuy, check for the max profit, and
    // even after updating minBuy, if it's not bigger then just keep the same
    maxProf = Math.max(maxProf, prices[i] - minBuy)
  }

  return maxProf;
}; 