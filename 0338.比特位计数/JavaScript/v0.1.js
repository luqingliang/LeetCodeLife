/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [];
    for (let i = 0; i <= num; i++) {
        res.push(recursion(i, 0));
    }
    return res;
};

// 递归执行二进制转换过程，求得1出现次数
var recursion = function(num, res) {
    if (num <= 0) {
        return res;
    }
    if (num % 2 > 0) {
        res++;
    }
    return recursion(num >> 1, res);
}