/**
 * 利用按位与&，n&(n-1)每次把最低位1变为0
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let res = 0;
    while (n) {
        n &= n - 1;
        res++;
    }
    return res;
};