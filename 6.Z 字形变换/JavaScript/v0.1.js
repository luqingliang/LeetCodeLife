/**
 * 暴力破解
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    var arr = Array.from(new Array(numRows), () => new Array(len).fill(""));
    var col = 0;
    var row = 0;
    var flag = 0; // 0 增加状态，1减小状态
    for (i = 0; i < len; i++) {
        arr[row][col] = s[i];
        row += !flag ? 1 : -1;
        col += !flag ? (numRows <= 1 ? 1 : 0) : 1;
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
    for (strs of arr) {
        result += strs.join("");
    }
    return result;
};