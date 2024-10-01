//% (1) 변수,  타입

//% (2) 논리연산자, 복합대입 연산자, 비교연산자, 조건문, 증감연산자

//? 논리연산자
//# && ||

// console.log(1 > 0 && 1 > 0); // true false
// console.log(1 > 0 || 1 < 0); // true false

//# += -> 복합대입 연산자

// var a = 3;
// a += 1; // a = a + 1

// a -= 1; // a = a - 1
// console.log(a);

//# < > <= >=   true / false

var a = 1; //! number(숫자)
var b = "1"; //! string(글자)

console.log(a == b); //& ==    =>  양쪽이 같은데, type은 영향을 주지 않아
console.log(a === b); //& ===   => 양쪽이 같아야하고, type도 같아야 true이 나와

//#    !==  => false true

console.log(a !== b); //true

var d = 100; //숫자
var e = "100"; //글자

console.log("----------------------");

console.log(d === e); //false => 거짓
console.log(d !== e); //true

console.log("---------------------");
//# if()else

if (d === e) {
  console.log("if문이 실행 됐습니다.");
} else if (d === e) {
  console.log("else if 문이 실행 됐습니다.");
} else {
  console.log("모두가 실행 안 됐습니다");
}

console.log("--------------------");

//% (3) 반복문

for (i = 0; i < 7; i++) {
  console.log(i);
}

// i = 0 => console.log(0)
// i = 1 => console.log(1)
// i = 2 => console.log(2)
// i = 3 => console.log(2)
// .........
// i = 9 => console.log(9)
// i = 10

//% (4) 배열, push(), concat()

let arr = [1, 4, 2, 8, 3];

arr[1]; //! => 2  index 0
arr.length; //! 배열의 길이 => index의 개수

// let arr2 = [1, '글자', {number:1}]

//% (5) 객체

console.log("----------------");

let obj = {
  name: "bob",
  age: 11,
  language: "english",
};

console.log(obj.language);

//% (6) 함수
console.log("------------------------------");

//! (1) 화살표 () => {}

let name = "성다운";
let age = 25;

const intro = (a, b) => {
  console.log("내 이름은" + a);
  console.log("내 나이는" + b);
};

//! (2) 함수 호출
intro(name, age);

console.log("------------------------------");


//% (7) dom스크립트

//!(1) document.querySelector
const text = document.querySelector(".text");

const yourName = document.querySelector('.name')
console.log(yourName);


//!(2) document.querySelectorAll
const textAll = document.querySelectorAll(".text");
console.log(textAll);



//% (8) innerText, innerHTML, createElement()

// yourName.innerText = '저는 사실 성다운이 아닙니다.';

// yourName.innerHTML = '<a href="#">성다운</a> <a href="#">나는 자바스크립트를 좋아하지</a>';

const yourAge = document.createElement('div');

yourName.append(yourAge);


//! createElement => 어떠한 태그를 만든다.
//! append => 그 태그를 html 어디에다 넣을지 결정한다.

yourAge.innerText = '나는 25세 입니다.';




//% (9) classList: add, remove, toggle, contains, parentNode.classList


yourAge.classList.add('age');
// yourAge.classList.remove('age');



//% (10) style

yourName.style.fontSize = '50px';
yourName.style.fontWeight = 'bold';


//% (11) event


yourName.addEventListener('click', () => {
  yourName.style.color = "blue";
});


//% (12) 이벤트 위임


const wrap = document.querySelector('.wrap');

wrap.addEventListener('click', (e) => {
  if (e.target.classList.contains('text')) {
    e.target.classList.toggle('active');
  }
});








//% (13) Date()

//% (14) setTimeout(), setInterval()
