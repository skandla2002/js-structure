// 리스트의 일종으로 후입선출 구조

class Queue {
    constructor(){
        console.log('Queue Constructor');
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}


// 끝에 인자 추가
function enqueue(el) {
    this.dataStore.push(el);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for(var i = 0 ; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}



module.exports = Queue;