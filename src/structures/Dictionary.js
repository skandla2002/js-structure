// 키 쌍으로 구성되어 있는 자료 구조
function Dictionary() {
  this.datastore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}

function add(key, value) {
  this.datastore[key] = value;
}
function find(key) {
  return this.datastore[key];
}
function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (var key in Object.keys(this.datastore)) {
    print(key + " -> " + this.datastore[key]);
  }
}

export default Dictionary;
