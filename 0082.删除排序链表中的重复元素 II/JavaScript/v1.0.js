/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 一遍遍历，利用哑节点防止头节点重复
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let res = new ListNode(0, head);
    let cur = res;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return res.next;
};