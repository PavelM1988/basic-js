function deleteDigit(n) {
    const arr = String(n).split('');
    const options = arr.map((e, i, a) => a.filter((el, ind) => ind !== i)).map(item => item.join(''));

    return Number(options.sort((a, b) => b - a)[0]);
}

module.exports = {
    deleteDigit
};