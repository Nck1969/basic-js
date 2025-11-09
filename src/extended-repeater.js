/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options.separator || '+';

  function getAddition(options){
    let addition = options.addition === undefined ? '' : options.addition;
    let additionString = addition + (options.additionSeparator || '|');

    return additionString.repeat(options.additionRepeatTimes - 1) + addition;
  }

  let addition = getAddition(options);
  let result = str + addition + separator;

  return result.repeat(options.repeatTimes - 1) + str + addition;
}

module.exports = {
  repeater
};
