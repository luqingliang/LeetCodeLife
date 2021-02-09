/**
 * 暴力判断破解
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = "";

    var str = "";
    var val = num % 10;
    if (val > 0 ) { // 个位数
        num -= val;
        if (val === 4) {
            str = "IV";
        } else if (val === 9) {
            str = "IX";
        } else {
            if (val >= 5) {
                str = "V";
                val-=5;
            }
            for (i = 0; i < val; i++) {
                str += "I";
            }
        }
        result = str + result;
        str = "";
    }

    val = num % 100;
    if (val > 0 ) { // 十位数
        num -= val;
        if (val === 40) {
            str = "XL";
        } else if (val === 90) {
            str = "XC";
        } else {
            if (val >= 50) {
                str = "L";
                val-=50;
            }
            for (i = 0; i < val; i+=10) {
                str += "X";
            }
        }
        result = str + result;
        str = "";
    }

    val = num % 1000;
    if (val > 0 ) { // 百位数
        num -= val;
        if (val === 400) {
            str = "CD";
        } else if (val === 900) {
            str = "CM";
        } else {
            if (val >= 500) {
                str = "D";
                val-=500;
            }
            for (i = 0; i < val; i+=100) {
                str += "C";
            }
        }
        result = str + result;
        str = "";
    }

    val = num % 10000;
    if (val > 0 ) { // 千位数
        for (i = 0; i < val; i+=1000) {
            str += "M";
        }
        result = str + result;
    }

    return result;
};