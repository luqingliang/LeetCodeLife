/**
 * 一遍遍历，记录当前海拔和最高海拔，最后返回最高海拔
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let max = 0; let h = 0;
    for (let i = 0; i < gain.length; i++) {
        h = h + gain[i];
        if (h > max) {
            max = h;
        }
    }
    return max;
};