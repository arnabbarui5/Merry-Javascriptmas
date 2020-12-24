function reverseAString(str) {
  let reversedString = ''; const { length } = str;
  for (let i = 0; i < length; i += 1) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

module.exports = { reverseAString };
