/**
 * 暴力破解
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let now = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            now++;
        } else {
            if (now > res) {
                res = now;
            }
            now = 0;
        }
    }
    return now > res ? now : res;
};