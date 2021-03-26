/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 借助数组和Map暴力破解
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    let map = new Map();
    let node = head;
    while (node) {
        if (!map.has(node.val)) {
            map.set(node.val, 1);
        } else {
            map.set(node.val, map.get(node.val) + 1);
        }
        node = node.next;
    }
    let arr = [];
    while (head) {
        if (map.get(head.val) <= 1) {
            arr.push(head);
        }
        head = head.next;
    }
    if (arr.length <= 0) {
        return null;
    }
    let res = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            arr[i].next = arr[i + 1];
        } else {
            arr[i].next = null;
        }
    }

    return res;
};