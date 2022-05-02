const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

/// PASS
function getDNSStats(domains) {
    const domainsList = {}
    domains.forEach((line, i) => {
            let temp = ""
            line.split('').reverse().forEach(s => {

                if (s === '.') {
                    domainsList[temp] = domainsList[temp] + 1 || 1
                }
                temp = s + temp
            })
            domainsList[temp] = domainsList[temp] + 1 || 1
        }
    )

    const res = {}
    Object.keys(domainsList).forEach(domain => res['.' + domain.split('.').reverse().join('.')] = domainsList[domain])

    return res
}

module.exports = {
    getDNSStats
};