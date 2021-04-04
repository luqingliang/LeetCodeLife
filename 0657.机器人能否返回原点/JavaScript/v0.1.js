/**
 * 模拟
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for (let s of moves) {
        if (s === "U") {
            y++;
        } else if (s === "D") {
            y--;
        } else if (s === "L") {
            x--;
        } else if (s === "R") {
            x++;
        }
    }
    if (x === 0 && y ===0) {
        return true;
    } else {
        return false;
    }
};