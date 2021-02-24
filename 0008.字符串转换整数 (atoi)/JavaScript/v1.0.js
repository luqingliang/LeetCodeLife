/**
 * 使用有限状态机解答
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    class StateMachine {
        constructor() {
            this.state = "Start";
            this.sign = 1;
            this.result = 0;
            this.table = new Map([
                        // “ ”  +/-  数字  其他
                ["Start", ["Start", "Sign", "In_Number", "End"]],
                ["Sign", ["End", "End", "In_Number", "End"]],
                ["In_Number", ["End", "End", "In_Number", "End"]],
                ["End", ["End", "End", "End", "End"]]
            ]);
        }
        getType(char) {
            if (char === " ") {
                return 0;
            } else if (char === "+" || char === "-") {
                return 1;
            } else if (!isNaN(char)){
                return 2;
            }
            return 3;
        }

        updateState(char) {
            this.state = this.table.get(this.state)[this.getType(char)];
            if (this.state === "Sign") {
                this.sign = char === "-" ? -1 : 1;
            } else if (this.state === "In_Number") {
                this.result = this.result * 10 + Number(char);
            }
            return this.state;
        }
    }

    var machine = new StateMachine();
    for (i = 0; i < s.length; i++) {
        machine.updateState(s[i]);
        if (machine.state === "End") {
            break;
        }
    }
    machine.result *= machine.sign;
    return machine.result < 0 ? Math.max(machine.result, -(2**31)) : Math.min(machine.result, 2**31 - 1);
};