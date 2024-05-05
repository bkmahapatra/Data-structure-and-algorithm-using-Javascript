/**
 * Maximum node value in binary tree
 * ! time = O(n)  , aux space= O(h) : height + 1
 */
import Node from "./binaryTree";

function getMax(root: Node<number> | null) {
  if (root === null) {
    return -Infinity;
  } else {
    return Math.max(root.data, getMax(root.left), getMax(root.right));
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

console.log(getMax(root));
