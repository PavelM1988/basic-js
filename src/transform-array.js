const { NotImplementedError } = require('../extensions/index.js');

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
        throw new Error(`'arr' parameter must be an instance of the Array!`)
    }
    const arrr = arr.concat()
    console.log(arr);
    if (!arr.length) return []
    if ((arr.every(el => (typeof el) == 'number'))) return arr
    if ((arrr[0] == '--discard-prev') || (arrr[0] == '--double-prev')) {
        arrr.shift()

    }
    if ((arrr[arrr.length - 1] == '--double-next') || (arrr[arrr.length - 1] == '--discard-next')) {
        arrr.pop()

    }
    for (let i = 0; i < arrr.length; i++) {
        if ((arrr[i] == '--discard-next') && (arrr[i + 2] == '--discard-prev')) {
            arrr.splice(i, 3)
        }
        if ((arrr[i] == '--discard-next') && (arrr[i + 2] == '--double-prev')) {
            arrr.splice(i, 3)
        }
        if ((arrr[i] == '--double-next') && (arrr[i + 2] == '--double-prev')) {
            arrr.splice(i, 1, arrr[i + 1])
            arrr.splice((i + 2), 1, arrr[i])
        }
        if ((arrr[i] == '--double-next') && (arrr[i + 2] == '--discard-prev')) {
            arrr.splice(i, 1)
            arrr.splice((i + 1), 1)
        }
        if (arrr[i] == '--double-next') {
            arrr.splice(i, 1, arrr[i + 1])
        }
        if (arrr[i] == '--double-prev') {
            arrr.splice(i, 1, arrr[i - 1])
        }
        if (arrr[i] == '--discard-prev') {
            arrr.splice(i, 1, arrr[i - 1])
        }
        if (arrr[i] == '--discard-next') {
            arrr.splice(i, 1, arrr[i + 1])
        }
    }

    return arrr

}


module.exports = {
    transform
};