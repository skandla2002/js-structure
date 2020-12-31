function List() {
  // List를 사용하면 이터레이터(iterator, 반복자) 구현 가능함
  // 리스트에 새 요소를 추가 했을때 리스트가 바뀌어도 이터레이터를 갱신할 필요가 없음
  // List 클래스에 사용하는 데이터 저장소의 종류가 달라져도 이전과 같은 방식으로 요소에 접근 가능
  // 탐색시에 앞에서 뒤로도 가능하도 뒤에서 앞으로도 가능함
  // for : front > next > end, end > next > front로 처리 가능
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //저장소
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;

  function append(el) {
    // this.dataStore = this.dataStore.push(el);
    this.dataStore[this.listSize++] = el;
  }

  function find(el) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == el) {
        return i;
      }
    }
    return -1;
  }

  function remove(el) {
    var foundAt = this.find(el);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  function length() {
    return this.listSize;
  }

  function toString() {
    return this.dataStore;
  }

  function insert(el, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, el);
      ++this.listSize;
      return true;
    }
    return false;
  }

  function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
  }

  function contains(el) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == el) {
        return true;
      }
    }
    return false;
  }

  function front() {
    this.pos = 0;
  }
  function end() {
    this.pos = this.listSize - 1;
  }
  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  function currPos() {
    return this.pos;
  }
  function moveTo(position) {
    this.pos = position;
  }
  function getElement() {
    return this.dataStore[this.pos];
  }
}

// var name = new List();
// name.append("test");
// console.log(name.toString());
// export default List;

module.exports = new List();
