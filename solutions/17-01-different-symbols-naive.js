function differentSymbolsNaive(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }
  let uniqueChars = '';
  const { length } = str;
  for (let i = 0; i < length; i += 1) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars.length;
}

module.exports = { differentSymbolsNaive };
