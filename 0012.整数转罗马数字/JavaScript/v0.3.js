/**
 * 找到暴力破解规律，优化
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = "";
    var baseNum = 10;
    while (num > 0) {
        var val = num % baseNum;
        result = trans(val, baseNum) + result;
        num -= val;
        baseNum *= 10;
    }

    return result;
};

var map = new Map([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
]);

var trans = function(val, base) {
    var str = "";
    var half = base / 2;
    var baseNum = base / 10;
    if (val > 0 ) {
        if (val === half - baseNum) {
            str = map.get(baseNum) + map.get(half);
        } else if (val === base - baseNum) {
            str = map.get(baseNum) + map.get(base);
        } else {
            if (val >= half) {
                str = map.get(half);
                val-=half;
            }
            for (i = 0; i < val; i+=baseNum) {
                str += map.get(baseNum);
            }
        }
    }
    return str;
}