/**
 * 暴力破解
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let s = new Set(allowed.split(""));
    let res = 0;
    for (let str of words) {
        let f = true;
        for (let i = 0; i < str.length; i++) {
            if (!s.has(str[i])) {
                f = false;
                break;
            }
        }
        if (f) {
            res++;
        }
    }
    return res;
};