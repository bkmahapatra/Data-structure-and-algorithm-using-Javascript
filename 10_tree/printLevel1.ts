/**
 * Level order traversal line by line(breadth first)
 *
 * ! time = θ(n) , aux space = O(n) : θ(width)
 *
 * should use queue to get proper propermance instead of array.
 */

import Node from "./binaryTree";

function printLevelByLine<T>(root: Node<T> | null) {
  if (root === null) {
    return;
  }

  const que: any[] = [];

  que.push(root);
  que.push(null);

  while (que.length !== 0) {
    const curr = que.shift();

    if (curr === null) {
      console.log("\n");
      que.push(null);
      continue;
    }

    console.log(curr.key);

    if (curr?.left !== null) que.push(curr?.left);
    if (curr?.right !== null) que.push(curr?.right);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

// printLevelByLine(root);

/**
 * Method 2
 * ! time = O(n) , aux space = O(n) : θ(width)
 */
function printLevelByLine2<T>(root: Node<T> | null) {
  if (root === null) {
    return;
  }

  const que: any[] = [];

  que.push(root);

  while (que.length !== 0) {
    const len = que.length;

    for (let i = 0; i < len; i++) {
      const curr = que.shift();

      console.log(curr.data);

      if (curr?.left !== null) que.push(curr?.left);
      if (curr?.right !== null) que.push(curr?.right);
    }

    console.log("\n");
  }
}
printLevelByLine2(root);
