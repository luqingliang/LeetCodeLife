/**
 * 暴力破解
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && compare(haystack, i, needle)) {
            return i;
        }
    }
    return -1;
};

var compare = function(str, index, need) {
    if (str.length - index < need.length) {
        return false;
    }
    for (let i = 0; i < need.length; i++) {
        if (str[index + i] !== need[i]) {
            return false;
        }
    }
    return true;
}