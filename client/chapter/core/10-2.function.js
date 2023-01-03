/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal=function(moneyA, moneyB, moneyC, moneyD){
  
/* arguments: 함수 안에서만 접근 가능한 인수들의 집합 객체로서 
  배열과 유사하여 유사배열타입으로 불리는 변수 */
  //console.log(arguments);
  // return moneyA + moneyB + moneyC + moneyD;
  
  //Array.from: 진짜 배열을 만들어주는 능력
  let arr=Array.from(arguments);
  console.log(arr);
};


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression=function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression=function hello(){};


// 콜백 함수 (표현)식
let callbackFunctionExpression=function(url,resolve,reject){
if(typeof url === 'string' && url.includes('http')&&url.includes('www')){
  resolve()
}
else{
  reject()
}
};
callbackFunctionExpression(
  'http://www.naver.com',
  function(){
console.log('해당 페이지로 이동');
  },
  function(){
console.log('url 입력 정보가 올바르지 않음');
  }
  );


// 함수 선언문 vs. 함수 (표현)식
/* functionaa(){  {#fff}

}

const bb=function(){

} */

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
//오늘날엔 많이 안 씀
let IIFE;
(function aa(){

});