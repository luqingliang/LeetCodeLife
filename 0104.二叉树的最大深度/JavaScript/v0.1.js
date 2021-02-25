/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归暴力破解
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let res = dfs(root, 1);
    console.log(res);
    return res;
};

var dfs = function(node, deep) {
    if (!node || (!node.left && !node.right)) {
        return deep;
    }
    let leftDeep = dfs(node.left, deep + 1);
    let rightDeep = dfs(node.right, deep + 1);
    return leftDeep > rightDeep ? leftDeep : rightDeep;
}