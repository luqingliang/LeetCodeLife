/**
 * 借助栈解决
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);
    var list  = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            let need = list.pop();
            if (map.get(char) !== need) {
                return false;
            }
        } else {
            list.push(char);
        }
    }
    return list.length > 0 ? false : true;
};