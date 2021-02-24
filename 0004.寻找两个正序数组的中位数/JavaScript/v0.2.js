/**
 * 双指针移动方法破解
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    var sum = 0;
    var moveCounts = [];
    if (len % 2 === 0) {
        moveCounts.push(len / 2, len / 2 + 1);
    } else {
        moveCounts.push(Math.ceil(len / 2));
    }

    var index1 = 0;
    var index2 = 0;
    var count = 0;
    while(count < moveCounts[moveCounts.length - 1]) {
        ++count;
        var f = 0;
        var a = nums1[index1];
        var b = nums2[index2];
        if (b === undefined || a <= b) {
            // 移动数组1的指针
            ++index1
        } else {
            // 移动数组2的指针
            ++index2;
            f = 1;
        }
        if (moveCounts.indexOf(count) !== -1) {
            sum += !f ? a : b;
        }
    }
    return sum / moveCounts.length;
};