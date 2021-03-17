/**
 * 利用Set判断是否是宝石
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    const map = new Set(jewels.split(""));
    let res = 0;
    for (let i = 0; i < stones.length; i++) {
        if (map.has(stones[i])) {
            res++;
        }
    }
    return res;
};