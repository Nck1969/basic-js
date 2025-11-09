/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let charToCheck = str[0];
  let temp = 1;


  str.split('').forEach((char, index) => {
    if(index === 0) return;

    if(charToCheck === char) {
      temp++;
    } else {
      result += temp > 1 ? temp + charToCheck : charToCheck;
      charToCheck = char;
      temp = 1;
    }

    if(index === str.length - 1) {
      result += temp > 1 ? temp + charToCheck : charToCheck;
    }
  })

  return result;
}

module.exports = {
  encodeLine
};
