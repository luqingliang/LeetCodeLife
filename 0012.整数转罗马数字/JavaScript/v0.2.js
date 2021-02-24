/**
 * 提出公共逻辑
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = "";
    
    var val = num % 10;
    num -= val;
    result = trans(val, 10) + result;

    val = num % 100;
    num -= val;
    result = trans(val, 100) + result;

    val = num % 1000;
    num -= val;
    result = trans(val, 1000) + result;

    val = num % 10000;
    result = trans(val, 10000) + result;

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