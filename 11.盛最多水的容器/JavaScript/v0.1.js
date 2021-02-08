/**
 * 暴力遍历
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for (i = 0; i < height.length; i++) {
        for (j = i + 1; j <height.length; j++) {
            var h = Math.min(height[i], height[j]);
            var w = j - i;
            var area = h * w;
            if (area > max) {
                max = area;
            }
        }
    }
    return max;
};