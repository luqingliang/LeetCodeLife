/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 借助数组反转，然后递归调用得到最终结果
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || !head.next) {
        return head;
    }
    let arr = [];
    while (arr.length < k && head) {
        arr.push(head);
        head = head.next;
    }

    if (arr.length < k) {
        return arr[0];
    }
    let oldNext = arr[arr.length - 1].next;
    // 开始翻转
    let index = arr.length - 2;
    let node = arr[index + 1];
    while (index >= 0) {
        let next = arr[index];
        node.next = next;
        node = next;
        index--;
    }
    arr[0].next = reverseKGroup(oldNext, k);
    return arr[arr.length - 1];
};