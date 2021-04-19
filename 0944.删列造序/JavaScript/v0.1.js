/**
 * 暴力破解
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const len = strs.length;
    const strLen = strs[0].length;
    let arr = new Array(strLen).fill(0);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < strLen; j++) {
            if (arr[j] === 0) {
                if (strs[i][j].charCodeAt() < strs[i - 1][j].charCodeAt()) {
                    arr[j] = 1;
                }
            }
        }
    }
    return eval(arr.join("+"));
};