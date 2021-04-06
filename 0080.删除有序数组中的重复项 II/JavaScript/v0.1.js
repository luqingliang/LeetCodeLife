/**
 * 单指针遍历，每次遇到重复的就让后续元素前移一位
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let index = 0;
    let len = nums.length;
    while (index < len) {
        if (index > 1) {
            if (nums[index] === nums[index - 1] && nums[index] === nums[index - 2]) {
                for (let i = index; i < len; i++) {
                    if (i < len - 1) {
                        nums[i] = nums[i + 1];
                    }
                }
                len--;
            } else {
                index++;
            }
        } else {
            index++;
        }
    }
    return len;
};