const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    function getArrayDepth(arr) {
      if (!Array.isArray(arr)) return 0;
      return 1 + Math.max(0, ...arr.map(getArrayDepth));
    }

    return getArrayDepth(arr);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
