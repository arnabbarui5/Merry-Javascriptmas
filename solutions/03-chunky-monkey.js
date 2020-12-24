function chunkyMonkey(values, size) {
  const chunkedArray = [];
  const arrayLength = values.length;
  for (let i = 0; i < arrayLength; i += size) {
    chunkedArray.push(values.slice(i, i + size));
  }
  return chunkedArray;
}

module.exports = { chunkyMonkey };
