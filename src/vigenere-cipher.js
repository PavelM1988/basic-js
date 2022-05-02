const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

    constructor(modification = true) {
        this.modification = modification;
    };

    ALPHABET_LENGTH = 26;
    UNICODE_POS_OFFSET = 65;

    isArgumentsCorrect(arg1, arg2) {
        const errorIncorrectArgs = Error("Incorrect arguments!");
        if(!arg1 || !arg2) {
            throw errorIncorrectArgs;
        };

        return true;
    }

    getKeyIndicies(key) {
        const indicies = [];
        for (let i = 0; i < key.length; i++) {
            if (key[i].match(/[a-z]/i)) {
                const index = key[i].charCodeAt();
                indicies.push((index - 65) % 32);
            }
        }
        return indicies;
    }

    crypt(message, keys) {
        let resultStr = "";
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i].match(/[a-z]/i)) {
                const index = message[i].charCodeAt();
                resultStr += String.fromCharCode(
                    (index - this.UNICODE_POS_OFFSET + keys[j % keys.length]) % this.ALPHABET_LENGTH + this.UNICODE_POS_OFFSET
                );
                j++;
            } else {
                resultStr += message[i];
            }
        }
        resultStr = this.modification
            ? resultStr
            : resultStr.split('').reverse().join('');

        return resultStr;
    }

    encrypt(message, key) {
        this.isArgumentsCorrect(message, key);
        let keyIndicies = this.getKeyIndicies(key.toUpperCase());
        return this.crypt(message.toUpperCase(), keyIndicies);
    };

    decrypt(encryptedMessage , key) {
        this.isArgumentsCorrect(encryptedMessage, key);
        let keyIndicies = this.getKeyIndicies(key.toUpperCase());
        for (var i = 0; i < keyIndicies.length; i++) {
            keyIndicies[i] = (this.ALPHABET_LENGTH - keyIndicies[i]) % this.ALPHABET_LENGTH;
        };
        return this.crypt(encryptedMessage.toUpperCase(), keyIndicies);
    };
}

module.exports = {
    VigenereCipheringMachine
};