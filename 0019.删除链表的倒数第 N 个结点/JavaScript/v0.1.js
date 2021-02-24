/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 遍历一遍链表，使用数组保存，空间换时间
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeList = [];
    let node = head;
    while (node) {
        nodeList.push(node);
        node = node.next;
    }
    let leftNode = nodeList[nodeList.length - n - 1];
    let rightNode = nodeList[nodeList.length - n + 1];
    if (!leftNode) {
        head = !rightNode ? null : rightNode;
    } else {
        leftNode.next = !rightNode ? null : rightNode;
    }
    return head;
};