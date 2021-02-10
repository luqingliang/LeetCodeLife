/**
 * 暴力枚举
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return "";
    }
    let str = strs[0];
    let i = 0;
    for (i; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== str[i]) {
                return str.substring(0, i);
            }
        }
    }
    return str.substring(0, i);
};