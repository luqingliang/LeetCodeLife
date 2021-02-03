/**
 * 暴力破解优化
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var startIndex = 0;
    var endIndex = 0;
    var m = {};
    for (i = 0; i < s.length; i++) {
        var char = s[i];
        var before = m[char];
        if (before !== undefined) {
            // 前面出现过该字母
            for (index of before) {
                if (i - index > endIndex - startIndex) {
                    if (check(s, index, i)) {
                        endIndex = i;
                        startIndex = index;
                        break;
                    }
                }
            }
            before.push(i);
        } else {
            m[char] = [i];
        }
    }
    return s.substring(startIndex, endIndex + 1);
};

/**
 * 判断一个字符串是否是回文
 */
var check = function(s, leftIndex, rightIndex) {
    while(leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}