/**
 * 暴力破解， 通过字符串转换
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x.toString();
    var newStr = "";
    var f = x < 0;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    var result = !f ? parseInt(newStr) : -parseInt(newStr);
    var max = Math.pow(2, 31);
    if (result < -max || result > max - 1) {
        return 0;
    }
    return result;
};