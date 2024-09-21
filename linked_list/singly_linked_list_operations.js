/**
 * Singly liked list operations
 */
class lNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node1 = new lNode(10);
const node2 = new lNode(20);
const node3 = new lNode(30);
const node4 = new lNode(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// traverse
function traverse(head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// traverse(node1);

function recTraverse(head) {
  if (head === null) {
    return;
  }

  console.log(head.data);
  recTraverse(head.next);
}

// recTraverse(node1);

// insert at the beginging
function insertAtBegin(head, x) {
  const node = new lNode(x);
  node.next = head;

  return node;
}
// let head2 = null;
let head2 = node1;
head2 = insertAtBegin(head2, 5);
head2 = insertAtBegin(head2, 0);

// ! head2.next.next.next.data = 500; // does affect the node1 node
// traverse(node1);

recTraverse(head2);

// insert at the end
function insertAtEnd(head, x) {
  const tempNode = new lNode(x);

  if (head === null) {
    return tempNode;
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = tempNode;

  return curr;
}

// insert at a given position
function insertAtPos(head, pos, x) {
  const tempNode = new lNode(x);

  if (head === null) {
    return tempNode;
  } else if (pos === 1) {
    tempNode.next = head;
    return tempNode;
  }

  let curr = head;
  // 1 2 3 4
  for (let i = 1; i <= pos - 2 && curr != null; i++) {
    curr = curr.next;
  }

  if (curr === null) {
    return head;
  }

  tempNode.next = curr.next;
  curr.next = tempNode;

  return head;
}
let head3 = node1;
head3 = insertAtPos(head3, 3, 600);
traverse(head3);

// Delete 1st node
function deleteFirst(head) {
  if (head === null) {
    return null;
  } else {
    return head.next;
  }
}

// Delete last node
function deleteLastNode(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return null;
  }

  let curr = head;
  while (curr.next.next !== null) {
    curr = curr.next;
  }

  curr.next = null;

  return head;
}

// delete a node at a given position
function deleteAtPos(head, pos) {
  if (head === null) {
    return null;
  }

  if (pos === 1) {
    return head.next;
  }

  let curr = head;
  for (let i = 1; i <= pos - 2 && curr != null; i++) {
    curr = curr.next;
  }

  if (curr === null) {
    return head;
  }

  curr.next = curr.next.next;

  return head;
}

// search
function linkSearch(head, x) {
  let pos = 1;
  let curr = head;

  while (curr !== null) {
    if (curr.data === x) {
      return pos;
    } else {
      pos++;
      curr = curr.next;
    }
  }

  return -1;
}
function linkSearchRec(head, x) {
  if (head === null) return -1;
  if (head.data === x) return 1;
  else {
    let res = linkSearchRec(head.next, x);

    if (res == -1) {
      return -1;
    } else {
      return res + 1;
    }
  }
}
