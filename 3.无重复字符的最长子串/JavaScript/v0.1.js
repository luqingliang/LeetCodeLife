/**
 * 第一次，自己的方法硬解
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var resultStr = ""
    var nowStr = "";
    for (i = 0; i < s.length; i++) {
        var char = s[i];
        var index = nowStr.indexOf(char);
        if (index != -1) {
            nowStr = nowStr.substr(index + 1, nowStr.length);
        }
        nowStr += char;

        if (nowStr.length > resultStr.length) {
            resultStr = nowStr;
        }
    }
    return resultStr.length;
};