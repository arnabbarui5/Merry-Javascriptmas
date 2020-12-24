function candies(children, candy) {
  return Math.floor(candy / children) * children;
}

module.exports = { candies };
