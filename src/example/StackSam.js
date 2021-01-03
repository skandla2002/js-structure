import Stack from '../structures/Stack';

const stack1 = new Stack();

stack1.push(1);

stack1.push(2);

console.log(`stack1.peek() : ${stack1.peek()}`);

console.log(`stack1.pop() : ${stack1.pop()}`);

console.log(`stack1.length() : ${stack1.length()}`);


// 진법 전환
function mulBase(num, base) {
    var s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0){
        converted += s.pop();
    };
    return converted;
}

// 회문 처리
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0 ; i < word.length ; ++i){
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

// 재귀(https://www.htmlgoodies.com/primers/jsp/article.php/3622321)
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while ( s.length() > 0) {
        product *= s.pop();
    }
    return product;
}