function countVowelConsonant(str) {
  return str.split('').reduce((count, char) => ('aeiou'.indexOf(char) === -1 ? count + 2 : count + 1), 0);
}

module.exports = { countVowelConsonant };
