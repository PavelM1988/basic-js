function getSumOfDigits(n) {
    const sum = n.toString().split('').reduce((total, num) => total + +num, 0);
    return sum > 9 ? getSumOfDigits(sum) : sum;
}

module.exports = {
    getSumOfDigits
};