/**
 * 不使用map，优化空间使用
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    let max = Math.min(rectangles[0][0], rectangles[0][1]);
    let count = 1;
    for (let i = 1; i < rectangles.length; i++) {
        let l = Math.min(rectangles[i][0], rectangles[i][1]);
        if (l > max) {
            max = l;
            count = 1;
        } else if (l === max) {
            count++;
        }
    }
    return count;
};