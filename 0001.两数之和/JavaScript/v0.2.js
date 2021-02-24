/**
 * 参考题解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (i = 0; i < nums.length; i++) {
        var needNum = target - nums[i];
        if (Object.keys(map).includes(needNum + "")) {
            return [map[needNum], i];
        }
        map[nums[i]] = i;
    }
};