/**
 * DFS + 剪枝策略
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <= 0) {
        return res;
    }
    let res = [];
    dfs(n, "", res, 0, 0);
    return res;
};

var dfs = function(n, str, result, open, close) {
    if (open > n || close > open) { // 左括号大于一半或者右括号大于左括号了就是无效的分支
        return;
    }
    if (str.length >= 2 * n) {
        result.push(str);
        return;
    }
    dfs(n, str + "(", result, open + 1, close);
    dfs(n, str + ")", result, open, close + 1);
}