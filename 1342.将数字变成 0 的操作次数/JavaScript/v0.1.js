/**
 * 循环统计
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps  = function(num) {
    let res = 0;
    while (num > 0) {
        if ((num & 1) === 0) {
            num /= 2;
        } else {
            num--;
        }
        res++;
    }
    return res;
};