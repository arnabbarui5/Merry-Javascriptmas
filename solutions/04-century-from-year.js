function centuryFromYear(num) {
  return num % 100 ? Math.ceil(num / 100) : num / 100;
}

module.exports = { centuryFromYear };
