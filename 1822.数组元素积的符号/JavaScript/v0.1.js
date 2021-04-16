/**
 * 通过负号的数量判断
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    const len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            return 0;
        }
        if (nums[i] < 0) {
            count++;
        }
    }
    return (count & 1) === 0 ? 1 : -1;
};