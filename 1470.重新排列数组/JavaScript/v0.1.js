/**
 * 暴力破解
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let res = [];
    let i = 0;
    let j = n;
    while (res.length < nums.length) {
        res.push(nums[i], nums[j]);
        i++;
        j++;
    }
    return res;
};