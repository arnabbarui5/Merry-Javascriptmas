function alphabetSubsequence(str) {
  if (typeof str !== 'string' || !str.length) {
    throw new Error('Invalid input');
  }
  const lowerCaseStr = str.toLowerCase();
  const lastIndex = str.length - 1;
  for (let i = 0; i < lastIndex; i += 1) {
    const thisCharCode = lowerCaseStr.charCodeAt(i);
    const nextCharCode = lowerCaseStr.charCodeAt(i + 1);
    if (nextCharCode <= thisCharCode) {
      return false;
    }
    if (thisCharCode < 97 || thisCharCode > 122) {
      return false;
    }
  }
  const lastCharCode = lowerCaseStr[lastIndex];
  return !(lastCharCode < 97 || lastCharCode > 122);
}

module.exports = { alphabetSubsequence };
