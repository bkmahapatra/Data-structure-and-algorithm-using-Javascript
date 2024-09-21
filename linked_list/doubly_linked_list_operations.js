/**
 * Doubly linked list
 */
class dlNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

const head = new dlNode(0);
const node1 = new dlNode(10);
const node2 = new dlNode(20);
const node3 = new dlNode(30);
const node4 = new dlNode(40);

head.next = node1;
node1.prev = head;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node3;
node3.next = node4;

// insert at the beginning
function insertAtBegin(head, data) {
  const tempNode = new dlNode(data);
  tempNode.next = head;

  if (head !== null) {
    head.prev = tempNode;
  }

  return tempNode;
}

// insert at the end
function insertAtEnd(head, data) {
  const tempNode = new dlNode(data);

  if (head === null) {
    return tempNode;
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = tempNode;
  tempNode.prev = curr;

  return head;
}

// reverse a DLL
function reverseDll(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let curr = head,
    prev = null;
  while (curr !== null) {
    prev = curr.prev;
    curr.prev = curr.next;
    curr.next = prev;

    curr = curr.prev;
  }

  return prev.prev;
}

// Delete head of DLL
function deleteHead(head) {
  if (head === null || head.next === null) {
    return null;
  }
  head = head.next;
  head.prev = null;

  return head;
}

// delete last node
function deleteAtEnd(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.prev.next = null;

  return head;
}
