/**
 * 先确定要匹配的属性的索引，再遍历一遍统计符合标准的
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let keyIndex = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    let res = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][keyIndex] === ruleValue) {
            res++;
        }
    }
    return res;
};