/**
 * Get size of a binary tree
 * ! time = O(n) , aux space = O(h)
 */

import Node from "./binaryTree";

function getSize<T>(root: Node<T>) {
  if (root === null) {
    return 0;
  }

  return getSize(root.left) + getSize(root.right) + 1;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

console.log(getSize(root));
