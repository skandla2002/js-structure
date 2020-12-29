
function List() {
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
        for (var i = 0 ; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] === el){
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
}


var name = new List();
name.append('test');
console.log(name.toString());
// export default List;