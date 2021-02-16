/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 迭代比较组合新链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(-1);
    let result = l3;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next
    }
    l3.next = !l1 ? l2 : l1;
    return result.next;
};