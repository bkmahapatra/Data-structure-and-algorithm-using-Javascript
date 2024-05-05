/**
 * Check for balanced tree
 * ! Time: O(n)
 */

import Node from "./binaryTree";

function isBalanced<T>(root: Node<T>) {
  if (root === null) {
    return 0;
  }

  const leftHeight = isBalanced(root.left);
  if (leftHeight === -1) {
    return -1;
  }
  const rightHeight = isBalanced(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  return Math.abs(leftHeight - rightHeight) > 1
    ? -1
    : Math.max(leftHeight, rightHeight) + 1;
}

const root = new Node(120);
root.left = new Node(90);
root.right = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.right.right = new Node(50);

console.log(isBalanced(root));
