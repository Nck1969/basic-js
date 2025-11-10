/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const variants = [];
  const numberString = n.toString();

  for (let i = 0; i < numberString.length; i++) {
    let variant = "";
    if(i === 0){
      variant = numberString.slice(1);
    }else if(i === numberString.length - 1){
      variant = numberString.slice(0, i);
    }else{
      variant = numberString.slice(0, i) + numberString.slice(i + 1);
    }

    variants.push(variant);
  }

  return Math.max(...variants.map(it => Number(it)));
}

module.exports = {
  deleteDigit
};
