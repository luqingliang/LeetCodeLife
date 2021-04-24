/**
 * 通过字符串解决
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let arr = n.toString().split("");
    return eval(arr.join("*")) - eval(arr.join("+"));
};