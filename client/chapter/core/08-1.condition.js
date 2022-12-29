/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

입력받은 숫자가 0보다 큰 경우 1을 출력
입력받은 숫자가 0보다 작은 경우 -1을 출력
입력받은 숫자가 0인 경우 0을 출력
(사용자는 항상 숫자를 입력한다고 가정) */

let num = prompt('숫자를 입력해주세요.');

/* if(num>0){                          {#ccc} 
console.log('1');
}
else if(num<0){
console.log('-1');
}
else if(num==0){
  console.log('0')
} */
/* else {
  console.log('선택사항')
}
마지막에 붙는 else는 필수가 아닌 선택 사항 */

//삼항연산자(조건부 연산자)로 코딩
let message = (num>0) ? '1' :
  (num <0) ? '-1' :
  (num ==0) ? '0' : '숫자가 아님';

alert( message );

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie='yes';

// 영화 볼거니?
let goingToWatchMovie='no';

if(didWatchMovie=='yes'){ // if 문(statement)
  console.log('그거 재밌더랑');
}
else if(goingToWatchMovie=='yes'){ // else if 복수 조건 처리
  console.log('너무 설렌다~');
}
else{ // else 절(caluse)
console.log('음 난 별로');
}


// 조건부 연산자

// 멀티 조건부 연산자 식