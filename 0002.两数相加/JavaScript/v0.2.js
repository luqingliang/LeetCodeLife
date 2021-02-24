/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 参考题解 优化
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result;
    var nextNode;
    var enterNum = 0;
    while(l1 || l2 || enterNum) {
        var val1 = !l1 ? 0 : l1.val;
        var val2 = !l2 ? 0 : l2.val;
        var sum = val1 + val2 + enterNum;
        if (sum >= 10) {
            sum -= 10;
            enterNum = 1;
        } else {
            enterNum = 0;
        }
        var node = new ListNode(sum, null);
        if (nextNode) {
            nextNode.next = node;
        }
        nextNode = node;
        if (!result) {
            result = nextNode;
        }
        l1 = !l1 ? null : l1.next;
        l2 = !l2 ? null : l2.next;
    }
    return result;
};