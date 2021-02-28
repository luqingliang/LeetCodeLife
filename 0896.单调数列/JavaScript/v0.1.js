/**
 * 暴力破解，通过首位确定是判断递增、递减还是全相等
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let type = 0;
    if (A[0] > A[A.length - 1]) {
        type = -1; // 递减
    } else if (A[0] < A[A.length - 1]) {
        type = 1; // 递增
    }
    let j = 0;
    for (let i = 1; i < A.length; i++) {
        if (type === -1 && A[i] > A[j]) {
            return false;
        } else if (type === 1 && A[i] < A[j]) {
            return false;
        } else if (type === 0 && A[i] !== A[j]) {
            return false;
        }
        j++;
    }
    return true;
};