/**
 * 优化空间复杂度
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);
    var result = 0;
    var index = 0;
    while (index < s.length) {
        var num = map.get(s[index]);
        if (index < s.length - 1 && num < map.get(s[index + 1])) {
            num = map.get(s[index + 1]) - num;
            index += 2;
        } else {
            index ++;
        }
        result += num;
    }
    return result;
};