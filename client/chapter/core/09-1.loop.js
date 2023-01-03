/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;
while(i<10){
  console.log(i);
  i++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

let j=frontEndDev.length-1;
while(j>=0){
  console.log(frontEndDev[j]);
  j--;
}

//... ->전개 연산자(전개 구문)spread operator :배열 항목을 펼침
// 전개 연산자를 안쓰면 원래 배열이 파괴 됨
//frontEndDev를 복사해서 copyArray에 할당
let copyArray=[...frontEndDev]
console.log(copyArray);

// pop()메서드는 자기가 반환시킨 값을 반환,뒤에서부터 뺌
/* while(copyArray.length){
  console.log(copyArray.pop());
} */

// shift()메서드는 자기가 반환시킨 값을 반환,앞에서부터 뺌
/* while(frontEndDev.length){
  console.log(frontEndDev.shift());
} */

/* //성능 검사 {#fff}
let z1=performance.now();
let i=0;

while(i<frontEndDev.length){
  let value=frontEndDev[i];
  console.log(value);
  i++;
}

let z2=performance.now();

console.log(z2-z1); */

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환