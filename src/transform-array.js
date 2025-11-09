/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformCommands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  const transformedArr = [];

  let i = 0;
  while (i < arr.length) {
    if (transformCommands.includes(arr[i])) {
      if (arr[i] === '--discard-next') {
        i += 2;
      } else if (arr[i] === '--discard-prev') {
        transformedArr.pop();
      } else if (arr[i] === '--double-next') {
        if (i < arr.length - 1) {
          transformedArr.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (i > 0) {
          transformedArr.push(arr[i - 1]);
        }
      }
    } else {
      transformedArr.push(arr[i]);
    }
    i++;
  }

  return transformedArr;
}

module.exports = {
  transform
};
