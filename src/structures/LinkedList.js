function Node(el) {
  this.element = el;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.fine = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
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
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

modules.export = LinkedList;
