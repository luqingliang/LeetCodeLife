/**
 * 第一次自己的方法写的太臃肿，固舍去，先用正则解了
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var reg = new RegExp(/^(-|\+)?\d+/);
    var str = s.trim().match(reg);
    var res = str ? Number(str[0]) : 0;
    return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31));
};