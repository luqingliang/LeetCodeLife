/**
 * 动态规划，通过i & (i - 1) 将当前最低位1清零即可在之前已计算好的结果中找到相应1的个数，再加上清掉的1即可
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [0];
    for (let i = 1; i <= num; i++) {
        res.push(res[i & (i - 1)] + 1);
    }
    return res;
};