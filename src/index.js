import List from "./structures/List";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import LinkedList from "./structures/LinkedList";
import Tree from "./structures/Tree";
import Dictionary from "./structures/Dictionary";

class struct {
  constructor() {
    this.List = List;
    this.Stack = Stack;
    this.Queue = Queue;
    this.LinkedList = LinkedList;
    this.Tree = Tree;
    this.Dictionary = Dictionary;
  }
}
module.exports = struct;
