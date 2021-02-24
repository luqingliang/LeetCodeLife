/**
 * 不实用字符串解决
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var newNumber = 0;
    var oldNumber = x;
    while(x > 0) {
        newNumber = newNumber * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return newNumber === oldNumber;
};