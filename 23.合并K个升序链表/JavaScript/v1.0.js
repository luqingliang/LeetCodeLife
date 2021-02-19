/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归，分治合并，两两配对合并回溯
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
};

var merge = function(arr, l, r) {
    if (l === r) { // 只有一个链表的情况
        return arr[l];
    }
    if (l > r) { // 空数组的情况
        return null;
    }
    let mid = (l + r) >> 1; // 除2并向下取整
    return mergeTwoLists(merge(arr, l, mid), merge(arr, mid + 1, r));
}

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