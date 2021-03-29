/**
 * 暴力破解
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let arr = [];
    while (n > 0) {
        arr.push(n % 2);
        n = Math.floor(n / 2);
    }
    if (arr.length < 32) { // 补0
        arr.push(...new Array(32 - arr.length).fill(0));
    }
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] * Math.pow(2, (arr.length - 1 - i));
    }
    return res;
};