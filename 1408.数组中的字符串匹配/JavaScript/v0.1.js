/**
 * 暴力遍历破解
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    words.sort((a, b) => {
        return a.length - b.length;
    });
    let res = [];
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};