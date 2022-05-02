const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    arr: [],

    getLength() {
        return this.arr.length;
    },

    addLink(value) {
        this.arr.push('' + value);
        return this;
    },

    removeLink(position) {

        if (
            !Number.isInteger(position) ||
            position < 1 ||
            position > this.arr.length
        ) {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.arr.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.arr.reverse();
        return this;
    },

    finishChain() {

        const finalArr = [...this.arr];
        this.arr = [];

        if (finalArr.length === 1) return '( ' + finalArr[0] + ' )'


        return "( " + finalArr.shift() + " )~~( " + finalArr.join(" )~~( ") + " )";
    }
};


module.exports = {
    chainMaker
};