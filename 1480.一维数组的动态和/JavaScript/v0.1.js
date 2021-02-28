/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        res.push(nums[i] + res[res.length - 1]);
    }
    return res;
};