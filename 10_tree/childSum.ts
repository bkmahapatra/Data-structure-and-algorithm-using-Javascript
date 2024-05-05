/**
 * Children sum Property
 * root = left + right
 */

import Node from "./binaryTree";

function isChildSum(root: Node<number> | null) {
  if (root === null) {
    return true;
  }

  if (root.left === null && root.right == null) {
    return true;
  }

  let sum = 0;

  if (root.left !== null) {
    sum += root.left.data;
  }
  if (root.right !== null) {
    sum += root.right.data;
  }

  return root.data === sum && isChildSum(root.left) && isChildSum(root.right);
}

const root = new Node(120);
root.left = new Node(90);
root.right = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(50);

console.log(isChildSum(root));
