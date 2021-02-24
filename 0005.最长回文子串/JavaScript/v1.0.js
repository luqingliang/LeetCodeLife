/**
 * 动态规划解法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var startIndex = 0;
    var endIndex = 0;
    var len = s.length;
    var dp = Array.from(new Array(len), () => new Array(len).fill(0)); // 生成记录状态的二维数组
    for (i = len - 1; i >= 0; i--) {
        for (j = i; j < len; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]); // 必须先判断j-i，因为是从小的情况到大的
            if (dp[i][j] && j - i > endIndex - startIndex) {
                startIndex = i;
                endIndex = j;
            }
        }
    }
    return s.substring(startIndex, endIndex + 1);
};