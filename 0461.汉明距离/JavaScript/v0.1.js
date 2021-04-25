/**
 * 暴力破解
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let res = 0;
    while (x > 0 || y > 0) {
        let a = 0;
        let b = 0;
        if (x > 0) {
            a = x % 2;
            x = Math.floor(x / 2);
        }
        if (y > 0) {
            b = y % 2;
            y = Math.floor(y / 2);
        }
        if (a !== b) {
            res++;
        }
    }
    return res;
};