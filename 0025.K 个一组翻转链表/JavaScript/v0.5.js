/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 还是递归方法，不使用数组翻转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || !head.next) {
        return head;
    }
    let tail = head;
    let count = 1;
    while (count < k && tail.next) {
        tail = tail.next;
        count++;
    }
    if (count < k) {
        return head;
    }
    // 开始翻转
    let oldNext = tail.next;
    [head, tail] = reverse(head, tail);
    tail.next = reverseKGroup(oldNext, k);
    return head;
};

/**
 * 翻转一段链表，并返回新的首尾
 */
var reverse = function(head, tail) {
    let cur = head;
    let next = head.next;
    while (cur !== tail) {
        let tmp = next.next;
        next.next = cur;
        cur = next;
        next = tmp;
    }
    return [tail, head];
}