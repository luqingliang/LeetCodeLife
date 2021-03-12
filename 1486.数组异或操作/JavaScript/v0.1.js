/**
 * 不用想的太复杂，直接算就行
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res ^= start + 2 * i;
    }
    return res;
};