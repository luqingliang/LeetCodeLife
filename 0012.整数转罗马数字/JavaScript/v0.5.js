/**
 * 单指针，从大到小，递减遍历
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var index = 0;
    var result = "";
    while (num) {
        if (num >= nums[index]) {
            num -= nums[index];
            result += strs[index];
        } else {
            index++;
        }
    }
    return result;
};