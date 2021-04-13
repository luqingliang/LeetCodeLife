/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 模拟，直到遍历到最后才算是每一位单独的转换完成
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let res = 0
    while (head) {
        res = res * 2 + head.val;
        head = head.next;
    }
    return res;
};