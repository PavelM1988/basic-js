const { NotImplementedError } = require('../extensions/index.js');

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
    const array = [];
    const add = options.hasOwnProperty('addition')
        ? String(options.addition)
        : '';

    const calculator = options.repeatTimes || 1;

    const innerCalculator = options.additionRepeatTimes;

    const sum = options.separator || '+';

    const innerSum = options.additionSeparator  || '|';



    for (let i = 0; i < calculator; i++) {
        const innerArray = [];

        for (let j = 0; j < innerCalculator; j++) {
            innerArray.push(add);
        }

        array.push(str + (innerCalculator ? innerArray.join(innerSum) : add));
    }



    return array.join(sum);
}

module.exports = {
    repeater
};