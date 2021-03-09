/**
 * 用栈解决
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    let stack = [];
    for (let char of S) {
        if (stack.length > 0 && char === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
};