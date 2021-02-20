/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归，两个一组交换，交换完返回交换后排在前面的节点座位上层结果排在后面的节点的next
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    return recursion(head);
};

var recursion = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let first = head;
    let second = head.next;
    first.next = recursion(second.next);
    second.next = first;
    return second;
}