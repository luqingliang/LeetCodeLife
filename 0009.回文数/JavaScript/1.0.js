/**
 * 只反转一半数字
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    var newNumber = 0;
    while(x > newNumber) {
        newNumber = newNumber * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return x === newNumber || x === ((newNumber / 10) | 0)
};