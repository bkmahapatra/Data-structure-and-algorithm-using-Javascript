/**
 * Print nodes at k distance from root
 * !time = O(n)  , aux space= O(h) : height + 1
 */
import Node from "./binaryTree";

function printKDist<T>(root: Node<T> | null, dist: number): void {
  //   if (dist === 0 && root !== null) {
  //     console.log(root.key);
  //   }

  //   if (root !== null) {
  //     printKDist(root.left, dist - 1);
  //     printKDist(root.right, dist - 1);
  //   }

  if (root === null) {
    return;
  }

  if (dist === 0) {
    console.log(root.data);
  } else {
    printKDist(root.left, dist - 1);
    printKDist(root.right, dist - 1);
  }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);

printKDist(root, 1);
console.log("----------");
printKDist(root, 2);
console.log("----------");
printKDist(root, 3);
