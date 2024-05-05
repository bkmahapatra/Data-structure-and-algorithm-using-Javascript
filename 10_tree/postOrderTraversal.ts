/**
 * Postorder traversal
 * !time = O(n)  , aux space= O(h) : height + 1
 */

import Node from "./binaryTree";

function postOrderTraversal<T>(root: Node<T> | null) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.data);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

postOrderTraversal(root);
