/**
 * 暴力遍历破解
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < len; j++) {
                if (nums[j] !== 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
};