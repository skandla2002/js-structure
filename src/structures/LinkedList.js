function Node(el) {
  this.element = el;
  this.next = null;
  /* 양방향 Node 시작 */
  this.prev = null;
  /* 양방향 Node 끝 */
}

function LinkedList() {
  /* 단방향 LinkedList */
  this.head = new Node("head");
  this.fine = find;
  this.insert = insert;
  this.display = display;
  // this.findPrevious = findPrevious; // 양방향에서는 사용되지 않음
  this.remove = remove;
  /* 단방향 LinkedList 끝 */
  /* 양방향 LinkedList 시작 */
  this.findLast = findLast;
  this.dispReverse = dispReverse;
  /* 양방향 LinkedList 끝 */
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.prev = current; // 양방향
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

// 노드 삭제하려면 삭제하려는 바로 이전 노드를 찾아야 한다.
// 이전 노드의 next 노드를 삭제하면 된다.
function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

/* 단 방향 */
// function remove(item) {

//   var prevNode = this.findPrevious(item);
//   if (!(prevNode.next == null)) {
//     prevNode.next = prevNode.next.next;
//   }
// }

/* 양방향 */
function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
    currNode.next = null;
    currNode.prev = null;
  }
}

/* 양방향 */
function findLast() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}

/* 양방향 */
function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.prev == null)) {
    print(currNode.element);
    currNode = currNode.prev;
  }
}
modules.export = LinkedList;
