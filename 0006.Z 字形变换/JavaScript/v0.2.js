/**
 * 优化，字符串本身就可以看作数组
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    var arr = Array.from(new Array(numRows), () => new Array(1).fill(""));
    var row = 0;
    var flag = 0; // 0 增加状态，1减小状态
    for (i = 0; i < len; i++) {
        arr[row] += s[i];
        row += !flag ? 1 : -1;
        if (row >= numRows - 1) {
            flag = 1;
            if (row >= numRows) {
                row = numRows - 1;
            }
        } else if (row <= 0) {
            flag = 0;
            if (row < 0) {
                row = 0;
            }
        }
    }
    var result = "";
    for (str of arr) {
        result += str;
    }
    return result;
};