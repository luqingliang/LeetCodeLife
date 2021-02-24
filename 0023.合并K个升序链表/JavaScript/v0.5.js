/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 顺序合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length < 1) {
        return null;
    }
    let res = lists[0];
    for (let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i]);
    }
    return res;
};

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