/**
 * 优化，通过数学的方法解决
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while(x != 0) {
        var pop = x % 10;
        x /= 10;
        x = x < 0 ? Math.ceil(x) : Math.floor(x);
        result = result * 10 + pop;
    }
    var max = Math.pow(2, 31);
    if (result < -max || result > max - 1) {
        return 0;
    }
    return result;
};