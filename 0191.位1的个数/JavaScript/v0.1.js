/**
 * 暴力二进制转换破解
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let res = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            res++;
        }
        n = Math.floor(n / 2);
    }
    return res;
};