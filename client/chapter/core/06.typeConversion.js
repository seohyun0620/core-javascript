/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(YEAR);
console.log(String(YEAR));
console.log(typeof String(YEAR));
console.log(typeof YEAR);

// undefined, null
console.log(String(undefined));

// boolean
let iskind=true;
console.log(String(iskind + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie=true;
console.log(cutie*1);

// string
let num='123';
console.log(num*1);

// numeric string
let width='320px';
console.log(parseInt(width,10)); //10진수

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' ->false
// 위에 나열한 것 이외의 것들 
console.log(Boolean(0));

let value = true;
console.log(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(value)
console.log(typeof value); // string