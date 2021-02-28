/**
 * 改变原始数组，不借助额外变量解决
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};