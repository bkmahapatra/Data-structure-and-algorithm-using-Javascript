/**
 * Inorder traversal
 * !time = O(n)  , aux space= O(h) : height + 1
 */

import Node from "./binaryTree";

function inOrderTraversal<T>(root: Node<T> | null) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);

inOrderTraversal(root);
