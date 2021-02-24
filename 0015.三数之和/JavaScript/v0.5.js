/**
 * 排序 + 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => {
        return a - b;
    });
    if (nums[0] > 0) { // 排过序了，第一个大于零后面的不用看了
        return [];
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] === -nums[i]) {
                // 找到了符合条件的
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left - 1] === nums[left]) {
                    left++;
                }
                while (left < right && nums[right + 1] === nums[right]) {
                    right--;
                }
            } else {
                if (nums[left] + nums[right] < -nums[i]) { // 小了就移动左指针，否则移动右指针
                    left++;
                } else {
                    right--;
                } 
            }
        }
    }
    return result;
};