/**
 * 暴力破解
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    const len = accounts.length;
    for (let i = 0; i < len; i++) {
        let sum = eval(accounts[i].join("+"));
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};