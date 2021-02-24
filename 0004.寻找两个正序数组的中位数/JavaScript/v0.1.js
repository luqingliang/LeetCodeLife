/**
 * 自己思路硬解通过
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push.apply(nums1, nums2);
    nums1.sort((a, b) => {
        return a - b;
    });
    var len = nums1.length;
    if (len % 2 === 0) {
        var index = len / 2;
        return (nums1[index] + nums1[index - 1]) / 2;
    } else {
        return nums1[Math.floor(len / 2)];
    }
};