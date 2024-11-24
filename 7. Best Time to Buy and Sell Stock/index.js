var maxProfit = function (prices) {
  let n = prices.length;
  let res = 0;

  for (let i = 0; i < n - 1; i++) {
    //console.log(prices[i]);
    for (let j = i + 1; j < n; j++) {
      //console.log(prices[j]);

      res = Math.max(res, prices[j] - prices[i]);
    }
  }
  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
