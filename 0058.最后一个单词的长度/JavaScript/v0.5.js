/**
 * 优化代码，题目说明s只由字母和空格组成
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;
    while (index >= 0 && s[index] === " ") { // 先找到倒数第一个字母
        index--;
    }
    while (index >= 0 && s[index] !== " ") { // 再统计单词的长度
        res++;
        index--;
    }
    return res;
};