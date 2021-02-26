/**
 * 暴力破解
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;
    let start = false;
    while (index >= 0) {
        let char = s[index];
        if (/^[a-zA-Z]+$/.test(char)) {
            if (!start) {
                start = true;
            }
            res++;
        } else if (start) {
            break;
        }
        index--;
    }
    return res;
};