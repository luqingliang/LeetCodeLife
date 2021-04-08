/**
 * 倒叙查找，一遍遍历
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    } else if (len === 2) {
        return nums[0] < nums[1] ? nums[0] : nums[1];
    }
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] >= nums[0]) {
            if (i === len - 1) {
                return nums[0];
            }
            return nums[i + 1];
        }
    }
};