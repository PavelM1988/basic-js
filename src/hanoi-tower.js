const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    const SECONDS_IN_HOUR = 60;
    const turns = 2 ** disksNumber - 1;
    const seconds = Math.floor(
        (SECONDS_IN_HOUR / turnsSpeed) * turns * SECONDS_IN_HOUR
    );

    return { turns: turns, seconds: seconds };
}

module.exports = {
    calculateHanoi
};