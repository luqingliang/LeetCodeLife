/**
 * 利用map遍历一遍
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    let m = new Map();
    let max = 0;
    for (let i = 0; i < rectangles.length; i++) {
        let l = Math.min(rectangles[i][0], rectangles[i][1]);
        if (l > max) {
            max = l;
        }
        if (!m.has(l)) {
            m.set(l, 1);
        } else {
            m.set(l, m.get(l) + 1);
        }
    }
    return m.get(max);
};