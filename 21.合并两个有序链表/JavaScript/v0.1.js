/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 借助数组排序暴力破解
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let nodeList = [];
    while (l1) {
        nodeList.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        nodeList.push(l2);
        l2 = l2.next;
    }
    nodeList.sort((a, b) => {
        return a.val - b.val;
    });
    let l3 = !nodeList[0] ? null : nodeList[0];
    let node = l3;
    let index = 1;
    while (index < nodeList.length) {
        node.next = nodeList[index];
        node = node.next;
        index++;
    }
    return l3;
};