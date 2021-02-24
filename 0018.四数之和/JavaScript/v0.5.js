/**
 * 排序 + 双重循环 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => {
        return a - b;
    });
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[left] + nums[right] + nums[j] + nums[i];
                if (sum === target) {
                    result.push([nums[left], nums[right], nums[j], nums[i]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else {
                    if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
    }
    return result;
};