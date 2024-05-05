/**
 * Level order traversal (breadth first)
 * ! time = θ(n) , aux space = O(n)
 *
 * should use queue to get proper propermance instead of array.
 */

import Node from "./binaryTree";

function printLevel<T>(root: Node<T> | null) {
  if (root === null) {
    return;
  }
  //should use queue
  const que: any = [];

  que.push(root);

  while (que.length !== 0) {
    const curr = que.shift();

    console.log(curr.data);

    if (curr.left !== null) que.push(curr.left);
    if (curr.right !== null) que.push(curr.right);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
// root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

printLevel(root);
