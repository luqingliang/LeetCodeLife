/**
 * 暴力破解
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ahead = nums[0];
    let index = 1;
    while (index < nums.length) {
        if (nums[index] === ahead) {
            nums.splice(index, 1);
        } else {
            ahead = nums[index];
            index++;
        }
    }
    return nums.length;
};