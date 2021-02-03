/**
 * 自己的方法硬解
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = "";
    var m = {};
    for (i = 0; i < s.length; i++) {
        var char = s[i];
        var before = m[char];
        if (before !== undefined) {
            // 前面出现过该字母
            for (index of before) {
                var str = s.substring(index, i + 1);
                if (check(str)) {
                    if (str.length > result.length) {
                        result = str;
                    }
                    break;
                }
            }
            before.push(i);
        } else {
            m[char] = [i];
            if (char.length > result.length) {
                result = char;
            }
        }
    }
    return result;
};

/**
 * 判断一个字符串是否是回文
 */
var check = function(s) {
    if (s.length <= 2) {
        return true;
    }
    var leftIndex = 0;
    var rightIndex = s.length - 1;
    while(leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}