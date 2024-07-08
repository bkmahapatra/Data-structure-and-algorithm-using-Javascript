/**
 * Convert Binary Tree to Doubly Linked List
 */
import Node from "./binaryTree";

let prev: Node<any> | null = null;
function binaryToDLL<T>(root: Node<T> | null) {
  if (root === null) return root;

  let head: Node<T> | null = binaryToDLL(root.left);

  if (prev === null) {
    head = root;
  } else {
    root.left = prev;
    prev.right = root;
  }

  prev = root;

  binaryToDLL(root.right);

  return head;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
// root.left.right.right = new Node(50);
// root.left.right.left = new Node(50);

const head = binaryToDLL(root);

let cur = head;
while (cur !== null) {
  console.log(cur.data);
  cur = cur.right;
}
