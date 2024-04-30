/**
 * height of the binary tree
 * !time = O(n)  , aux space= O(h) : height + 1
 */
import Node from "./binaryTree";

function height<T>(root: Node<T> | null): number {
  if (root === null) {
    return 0;
  } else {
    return Math.max(height(root.left), height(root.right)) + 1;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

console.log(height(root));
