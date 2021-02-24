/**
 * 暴力破解，找到间隔最小的位置然后确认插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let minIndex = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let now = nums[i];
        if (now === target) {
            return i;
        }
        if (Math.abs(now - target) < Math.abs(nums[minIndex] - target)) {
            minIndex = i;
        }
    }
    let res = nums[minIndex] > target ? minIndex : minIndex + 1;
    return res < 0 ? 0 : res;
};