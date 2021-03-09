/**
 * 递归调用，使用split和join操作字符串
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    let arr = S.split("");
    let startIndex = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            startIndex = i - 1;
            break;
        }
    }
    if (startIndex === -1) {
        return S;
    }
    arr[startIndex] = "";
    arr[startIndex + 1] = "";
    return removeDuplicates(arr.join(""));
};