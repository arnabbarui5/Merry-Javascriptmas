function differentSymbolsNaive(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }
  const uniqueChars = {};
  return str.split('').reduce((charCount, char) => {
    if (uniqueChars[char]) {
      return charCount;
    }
    uniqueChars[char] = char;
    return charCount + 1;
  }, 0);
}

module.exports = { differentSymbolsNaive };
