/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 暴力破解，借助数组排序
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) {
            arr.push(node);
            node = node.next;
        }
    }
    arr.sort((a, b) => {
        return a.val - b.val;
    });
    let index = 0;
    let node = new ListNode(-1);
    let res = node;
    while (index < arr.length) {
        node.next = arr[index];
        node = node.next;
        index++;
    }
    return res.next;
};