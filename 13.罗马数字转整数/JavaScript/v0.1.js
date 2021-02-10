/**
 * 暴力查表破解，使用map，效率偏低
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
    var specialMap = new Map([
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900],
    ]);
    var result = 0;
    var index = 0;
    while (index <= s.length - 1) {
        if (index < s.length - 1 && specialMap.has(s[index] + s[index + 1])) {
            result += specialMap.get(s[index] + s[index + 1]);
            index += 2;
        } else {
            result += map.get(s[index]);
            index++;
        }
    }
    return result;
};