/**
 * 优化，减少字符串操作消耗
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    let startIndex = -1;
    for (let i = 1; i < S.length; i++) {
        if (S[i] === S[i - 1]) {
            startIndex = i - 1;
            break;
        }
    }
    if (startIndex === -1) {
        return S;
    }
    return removeDuplicates(S.substring(0, startIndex) + S.substring(startIndex + 2, S.length));
};