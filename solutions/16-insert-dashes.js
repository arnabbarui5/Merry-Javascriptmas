function insertDashes(str) {
  return str
    .split(' ')
    .map((word) => word.split('').join('-'))
    .join(' ');
}

module.exports = { insertDashes };
