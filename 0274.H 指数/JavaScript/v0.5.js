/**
 * 先排序，剔除特殊情况，转换成求最大正方形面积的问题
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    if (citations.length === 0) {
        return 0;
    }
    if (citations.length === 1) {
        return citations[0] > 0 ? 1 : 0;
    }
    citations.sort((a, b) => b - a);
    let res = 0;
    let f = 0;
    for (let i = 0; i < citations.length; i++) {
        let l = Math.min(i + 1, citations[i]);
        let area = l * l;
        if (area > f) {
            f = area;
            res = l;
        }
    }
    return res;
};