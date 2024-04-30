/**
 * Preorder traversal
 * !time = O(n)  , aux space= O(h) : height + 1
 */

import Node from "./binaryTree";

function preOrderTraversal<T>(root: Node<T> | null) {
  if (root !== null) {
    console.log(root.key);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

preOrderTraversal(root);
