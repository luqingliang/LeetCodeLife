/**
 * 暴力破解
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let res = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) {
                res++;
            }
        }
    }
    return res;
};