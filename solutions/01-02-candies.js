function candies(children, candy) {
  return candy - (candy % children);
}

module.exports = { candies };
