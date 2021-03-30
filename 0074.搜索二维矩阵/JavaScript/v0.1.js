/**
 * 先找到可能在的行，再遍历这一行
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (matrix[i][n - 1] < target) {
            continue;
        }
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};