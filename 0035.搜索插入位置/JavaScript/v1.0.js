/**
 * 二分查找法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = nums.length; // 插入一个比数组里所有数都大的数，就是插入在以数组长度为下标的位置
    while (left <= right) {
        let mid = ((right - left) >> 1) + left; // 用>>运算符可以自动舍去小数
        if(target <= nums[mid]) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
};