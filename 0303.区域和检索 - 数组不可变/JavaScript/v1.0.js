/**
 * 前缀和解法
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const len = nums.length;
    this.sums = new Array(len + 1).fill(0);
    for (let i = 0; i < len; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */