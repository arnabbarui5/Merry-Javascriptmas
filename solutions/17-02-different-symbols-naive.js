function differentSymbolsNaive(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }
  return new Set(str).size;
}

module.exports = { differentSymbolsNaive };
