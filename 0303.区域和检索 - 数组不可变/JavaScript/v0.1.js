/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
};

/** 
 * 暴力破解
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let res = 0;
    for (i; i <= j; i++) {
        res += this.arr[i];
    }
    return res;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */