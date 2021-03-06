/**
 * 二分查找
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] <  nums[high]) {
            high = pivot;
        } else if (nums[pivot] > nums[high]) {
            low = pivot + 1;
        } else {
            high--;
        }
    }
    return nums[low];
};