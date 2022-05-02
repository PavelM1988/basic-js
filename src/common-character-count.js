const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

    let firstStr = s1.length <= s2.length ? s1: s2;
    let secondStr = s1.length > s2.length ? s1: s2;
    let count = 0;

    for(let i = 0; i < firstStr.length; i++){
        const char = firstStr[i];
        const index = secondStr.indexOf(char);
        if(index !== -1) {
            secondStr = secondStr.slice(0, index) + secondStr.slice(index + 1)
            count++;
        }
    }
    return count;
}

module.exports = {
    getCommonCharacterCount
};