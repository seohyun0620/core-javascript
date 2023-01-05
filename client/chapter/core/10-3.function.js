/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney=(a,b,c,d)=>a+b+c+d;


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow=(numeric, powerCount)=>{
  let result=1;
  for(let i=0; i<powerCount;i++){
    result*=numeric;
  }
  return result;
}; //반복문으로 만들어보기 

//화살표 함수는 return을 생략할 수 있음, 중괄호{}가 없으면 그대로 return 됨
//null을 넣은 이유: 반복횟수를 맞추기 위함일뿐,의미없이 채우기 위함 
//let powExpression=(numeric,powerCount)=>Array(powerCount).fill(null).reduce(acc=>acc*numeric,1)//,뒤에(1)는 초기값, 기본값은 0임



pow(2,53) //2의 53승


// repeat(text: string, repeatCount: number): string;
let repeat=(text, repeatCount)=>{

let result ='';
for(let i=0; i<repeatCount; i++){
  result+=text;
}
return result;
}; 

let repeatExpression=(text,repeatCount)=>Array(repeatCount).fill(null).reduce(acc=>acc+text,'')//,뒤에(1)는 초기값, 기본값은 0임


repeat('hello',3) // 'hellohellohello'