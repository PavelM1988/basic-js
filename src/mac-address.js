const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

function MacAddress(a) {

    const input = new RegExp(/^([0-9,A-F]{2}\-){5}[0-9,A-F]{2}$/g);

    return input.test(a)

}
module.exports = {
    isMAC48Address: MacAddress
};