/**
 * 双指针解法
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const len = nums.length;
    let left = 0;
    let right = 0;
    while (right < len) {
        if (nums[right] !== 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
};