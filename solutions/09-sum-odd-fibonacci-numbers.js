function sumOddFibonacciNumbers(num) {
  if (num < 2) return 2;
  const cache = [1, 1];
  let sumOfOddFibNums = 2;
  while (cache[0] + cache[1] <= num) {
    const nextFibNum = cache[0] + cache[1];
    if (nextFibNum % 2) {
      sumOfOddFibNums += nextFibNum;
    }
    cache[0] = cache[1];
    cache[1] = nextFibNum;
  }
  return sumOfOddFibNums;
}

module.exports = { sumOddFibonacciNumbers };
