function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

module.exports = { sortByLength };
