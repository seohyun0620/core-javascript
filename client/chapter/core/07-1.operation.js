/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */
// Number로 감싸기 전에는 문자열임
let firstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
// 변수 앞에 + 붙으면 숫자형 됨
// 피연산자가 숫자가 아닌 경우엔 숫자형으로의 변환이 일어남.
let secondValue = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
console.log(firstValue + secondValue); // 12

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a='10';
let b='30';

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary;
binary = a+b;
console.log(binary);

// 삼항 연산자
let ternary=Math.random()>0.5 ? 'big' : 'small';

// 산술 연산자: 덧셈
let addition=a+b;

// 산술 연산자: 뺄셈
let subtraction=a-b;

// 산술 연산자: 곱셈
let multiplication=a*b;

// 산술 연산자: 나눗셈
let division=10/5;

// 산술 연산자: 나머지
let remainder=10%3;

// 산술 연산자: 거듭 제곱
let power=2**53;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
/* concat:배열을 합쳐줌
let newArray=[1,2,3].concat([4,5,6]);
console.log(newArray); */

let firstArray=[1,2,3];
let secondArray=[4,5,6];

// 전개 연산자 spread Operator(배열 ,객체 복사할 때 많이 쓰임)
let newArray1=[...firstArray, ...secondArray,8,9,100,'hello'];
console.log(newArray1);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let number=100;

number++; //100
++number;
console.log(number);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 2*5+125=10+125=135