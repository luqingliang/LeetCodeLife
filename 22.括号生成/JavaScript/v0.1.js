/**
 * 暴力解法，DFS递归出所有可能，再遍历出符合条件的
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <= 0) {
        return res;
    }
    let res = [];
    dfs(n, "", res);
    res = res.filter((str) => {
        return isValid(str);
    });
    return res;
};

var dfs = function(n, str, result) {
    if (str.length >= 2 * n) {
        result.push(str);
        return;
    }
    dfs(n, str + "(", result);
    dfs(n, str + ")", result);
}

var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);
    var list  = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            let need = list.pop();
            if (map.get(char) !== need) {
                return false;
            }
        } else {
            list.push(char);
        }
    }
    return list.length > 0 ? false : true;
};