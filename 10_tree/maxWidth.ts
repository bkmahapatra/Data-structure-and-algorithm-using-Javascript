/**
 * Maximum width of a binary tree
 * time : θ(n) , aux space θ(n) or width
 */

import Node from "./binaryTree";

function maxWidth(root: Node<number>) {
  if (root === null) {
    return 0;
  }

  let res = 0;

  const stk: any[] = [];

  stk.push(root);

  while (stk.length > 0) {
    let count = stk.length;
    res = Math.max(res, count);

    for (let i = 0; i < count; i++) {
      let cur = stk.shift();

      if (cur.left !== null) stk.push(cur.left);
      if (cur.right !== null) stk.push(cur.right);
    }
  }

  return res;
}

const root = new Node(120);
root.left = new Node(90);
root.right = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(40);
// root.right.right = new Node(50);
root.left.right.right = new Node(50);
root.left.right.left = new Node(50);

console.log(maxWidth(root));
