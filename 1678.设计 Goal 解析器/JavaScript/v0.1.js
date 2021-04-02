/**
 * 暴力破解
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let res = "";
    let index = 0;
    while (index < command.length) {
        if (command[index] === "G") {
            res += "G";
            index++;
        } else if (command[index] === "(") {
            if (command[index + 1] && command[index + 1] === ")") {
                res += "o";
                index += 2;
            } else {
                index++;
            }
        } else if (command[index] === "a") {
            if (command[index + 1] && command[index + 1] === "l") {
                res += "al";
                index += 2;
            } else {
                index++;
            }
        } else {
            index++;
        }
    }
    return res;
};