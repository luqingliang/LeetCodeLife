/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [];
    for (let i = 0; i <= num; i++) {
        res.push(getOneCount(i));
    }
    return res;
};

// 改进，利用x=x&(x−1) 将 x 的二进制表示的最后一个 1 变成 0
var getOneCount = function(num) {
    let count = 0;
    while (num > 0) {
        num &= num - 1;
        count++;
    }
    return count;
}