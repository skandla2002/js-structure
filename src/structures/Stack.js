class Stack {
    constructor(){
        console.log('Stack Constructor');
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
    }

    
    
}

function push(el) {
    this.dataStore[this.top++] = el;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

module.exports = Stack;
