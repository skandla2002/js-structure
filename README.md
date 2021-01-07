# js-structure

- javascript data structure tools

## Array

1. 선언

```
var a = [];
var b = [1, 2];
var c = new Array(); // 빈 배열
var d = new Arrayt(1, 2, 3); // 1, 2, 3이 있는 배열
var e = new Array(10); // length가 10인 빈 배열
```

2. 얕은 복사, 깊은 복사

얕은 복사: 참조하는 주소가 같은 메모리를 바라보는 복사
깊은 복사: 객체 내부의 값을 별도 메모리에 위치하도록 하는 복사

3. 접근자 함수

```
// 검색
indexOf / lastIndexOf

// 문자열 표현
join / toString

// 새 배열 만들기
concat / splice(3, 3) // 첫요소(시작지점, 0부터 시작), 두번째 요소(요소수)
```

4. 변형자 함수

```
// 추가
push / unshift(1, 2) // 한번에 여러 요소 배열 추가
// 삭제
pop / shift // 맨 뒤쪽 제거는 pop, 맨 앞쪽 제거는 shift
// 중간요소 추가, 삭제
splice(2, 0, 4, 5, 6) // 첫요소(시작지점, 0부터 시작), 두번째 요소(삭제 요소수), 세번째 이후 요소(추가되는 요소들)
// 정렬
reverse / sort / sort(compare) // 비교함수 정렬(num1 - num2 > 0 은 순서 변경)
```

5. 반복자 함수

```
// 배열 없는 반복자
forEach / every(fn) / some(fn) / reduce(fn)
// 새 배열 반환 반복자
map(fn) / filter(fn) // fn이 참인 경우만 return
```

6. 이차원 및 다차원 배열

```
Array.matrix = function(numRows, numCols, initial);
// 이차열 배열 은 for 문으로 처리, 들쭉날쭉 배열은 length 기준으로 처리, 객체 요소 포함 해열 잘 동작함
```

## 연결 리스트:

> 노드객체가 모여서 리스트 구성, 각 노드는 레퍼런스를 통해 리스트의 다른 노드와 연결됨
> 삽입 / 삭제시 강점

### Node Class: 노드 데이터 저장하는 element와 next를 지정하는 값을 가짐

```
// 생성자 함수
function Node(element){
    this.element = element;
    thie.next = null; // 최초는 null
}
```

### 연결 리스트 Class

```
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}
```

---

- 출처: 자바스크립트 자료구조와 알고리즘 / 마이클 맥밀런 지음(우정은 옮김) / O'REILLY(한빛미디어)
