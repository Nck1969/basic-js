/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const constValuePositions = [];

  arr.forEach((item, index) => {
    if (item === -1) {
      constValuePositions.push(index);
    }
  });

  const sortedArray = arr.filter(item => item !== -1).sort((a, b) => a - b);

  constValuePositions.forEach(position => {
    sortedArray.splice(position, 0, -1);
  });

  return sortedArray;
}

module.exports = {
  sortByHeight
};
