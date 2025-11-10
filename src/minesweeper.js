/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getMinesCount(matrix, row, col) {
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        const isValidRow = (i) => i >= 0 && i < matrix.length;
        const isValidCol = (j) => j >= 0 && j < matrix[i].length;
        const isNotCellForCalculation = (i, j) => !(i === row && j === col);

        if (isValidRow(i) && isValidCol(j) && isNotCellForCalculation(i, j)) {
          count += matrix[i][j] ? 1 : 0;
        }
      }
    }

    return count;
  }

  return matrix.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      return getMinesCount(matrix, rowIndex, cellIndex);
    });
  });
}

module.exports = {
  minesweeper
};
