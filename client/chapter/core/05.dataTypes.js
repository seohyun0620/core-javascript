/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1="hello";
let nickName='tiger';
let message3=`안녕 내 이름은 ${'안녕' / 3}야`;

console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123
console.log('number :' ,typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 123456n);
// console.log(typeof 123456n+123n)

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid'));

console.log(typeof Math);

const func = function() {
  
}
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()
/* typeof 4 > 1 하면 4를 먼저 연산해서 number이 나오고
number>1 하는 결과가 나와서 false가 나옴
불린이 나올려면 함수를 써야함 typeof(4>1) */

// 언어 상, 오류




// Object
//key value
// const user = new Object()
const user={ //객체 리터럴(값)
  name:'tiger',
  age:27,
}

// Array
// let list = new Array();
let list =[10,100,1000,1,2,3] //배열 리터럴(값)

// function
function sum(a,b){ //매개변수 parameter
  return a+b
}
console.log(sum(10,50)); //인자 Argument

// this


