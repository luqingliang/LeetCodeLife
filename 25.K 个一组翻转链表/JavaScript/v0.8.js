/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 参考题解，不使用递归实现，减少系统栈资源使用
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let cur = hair;

    while (head) {
        let tail = cur;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nextHead = tail.next;
        [head, tail] = reverse(head, tail);
        // 把子链表重新接回原链表
        cur.next = head;
        tail.next = nextHead;
        cur = tail;
        head = tail.next;
    }
    return hair.next;
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