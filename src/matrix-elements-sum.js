/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, row, indexOfMatrix) => {
    if(indexOfMatrix === 0) {
      return acc + row.reduce((acc, item) => acc + item, 0);
    }

    return acc + row.reduce((acc, item, indexOfRow) => {
      if (matrix[indexOfMatrix - 1][indexOfRow] === 0) {
        return 0;
      }

      return acc + item;
    }, 0);
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
