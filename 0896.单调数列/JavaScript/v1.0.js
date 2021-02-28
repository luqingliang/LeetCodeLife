/**
 * 优化，一遍遍历
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let isUp = true; let isDown = true;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] < A[i + 1]) { // 出现了前面的比后面的小，就不是降序
            isDown = false;
        }
        if (A[i] > A[i + 1]) { // 出现了前面的比后面的大，就不是升序
            isUp = false;
        }
    }
    return isUp || isDown;
};