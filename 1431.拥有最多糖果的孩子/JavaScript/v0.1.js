/**
 * 暴力破解
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    const len = candies.length;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    let res = [];
    for (let val of candies) {
        if (val + extraCandies >= max) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    return res;
};