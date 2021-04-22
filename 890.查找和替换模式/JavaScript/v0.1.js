/**
 * 利用map和数字获取统一类型
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    function getType(str) {
        let map = new Map();
        let f = 1;
        let res = "";
        for (let i = 0; i < str.length; i++) {
            if (!map.has(str[i])) {
                map.set(str[i], f);
                res += f;
                f++;
            } else {
                res += map.get(str[i]);
            }
        }
        console.log(res);
        return res;
    }
    const type = getType(pattern);
    let res = [];
    console.log(type);
    for (let str of words) {
        if (getType(str) === type) {
            res.push(str)
        }
    }
    return res;
};