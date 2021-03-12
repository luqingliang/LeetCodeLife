/**
 * 暴力破解
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let nums = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i;
    }
    let res = nums[0];
    for (let i = 1; i < n; i++) {
        res = res ^ nums[i];
    }
    return res;
};