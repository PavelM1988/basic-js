const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let encrypted = '';
    let acount = 0;

    for (let i = 0; i < str.length; i++) {
        acount++;
        if (str[i] !== str[i + 1]) {
            encrypted += `${acount > 1 ? acount : ''}${str[i]}`;
            acount = 0;
        }
    }

    return encrypted;
}

module.exports = {
    encodeLine
};