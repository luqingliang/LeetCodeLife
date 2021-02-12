/**
 * 排序 + 双指针解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => {
        return a - b;
    });
    let result = null;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            if (sum === target) { // 只存在唯一答案
                return sum;
            }
            if (result === null) {
                result = sum;
            } else if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            if (sum <= target) {
                left++;
                while (left < right && nums[left - 1] === nums[left]) {
                    left++;
                }
            } else {
                right--;
                while (left < right && nums[right + 1] === nums[right]) {
                    right--;
                }
            }
        }
    }
    return result;
};