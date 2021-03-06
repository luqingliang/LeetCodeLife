/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(serchNext(nums, i));
    }
    return res;
};

/**
 * 暴力破解，每次最多要遍历一遍数组
 * @param {*} nums 
 * @param {*} index 
 * @returns 
 */
var serchNext = function(nums, index) {
    let res = -1;
    let flag = false;
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] > nums[index]) {
            res = nums[i];
            flag = true;
            break;
        }
    }
    if (!flag) {
        for (let i = 0; i < index; i++) {
            if (nums[i] > nums[index]) {
                res = nums[i];
                break;
            }
        }
    }
    return res;
}