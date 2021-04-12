/**
 * 暴力遍历破解
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let res = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let count = 0;
        let index = 0;
        while (index < len) {
            if (index !== i && nums[index] < nums[i]) {
                count++;
            }
            index++;
        }
        res.push(count);
    }
    return res;
};