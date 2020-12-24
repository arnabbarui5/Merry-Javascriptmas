function depositProfit(deposit, rate, threshold) {
  const years = Math.log(threshold / deposit) / Math.log(1 + rate / 100);
  return Number.isInteger(years) ? years + 1 : Math.ceil(years);
}
module.exports = { depositProfit };
