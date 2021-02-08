/**
 * 双指针降低时间复杂度
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var w = right - left;
        var h = Math.min(height[left], height[right]);
        var area = w * h;
        if (area > max) {
            max = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};