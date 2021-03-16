/**
 * 利用es6新特性和reduce函数的极简写法
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(item => item.reduce((t, n) => t + n, 0)));
};