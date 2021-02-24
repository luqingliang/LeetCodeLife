/**
 * 使用按位或运算实现32位整数转换和益处判断
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};