/**
 * 回溯法
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);
    if (digits.length <= 0) {
        return [];
    }
    let result = [];
    flashBack(map, digits, "", 0, result);
    return result;
};

var flashBack = function(map, digits, s, index, result) {
    if (index >= digits.length) {
        result.push(s);
        return;
    }
    let str = map.get(digits[index]);
    for (let i = 0; i < str.length; i++) {
        flashBack(map, digits, s + str[i], index + 1, result);
    }
}