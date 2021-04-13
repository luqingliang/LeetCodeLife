/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 利用数组，两遍遍历，暴力破解
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let res = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        res += (arr[i] * Math.pow(2, len - 1 - i));
    }
    return res;
};