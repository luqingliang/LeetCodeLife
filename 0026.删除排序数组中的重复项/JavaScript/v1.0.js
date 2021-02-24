/**
 * 双指针，快慢指针解决
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // 先加，否则会覆盖之前的有效数据
            nums[i] = nums[j];
        }
    }
    return i + 1;
};