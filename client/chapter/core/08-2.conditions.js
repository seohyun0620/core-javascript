/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
/* age(나이)가 14세 이상 90세 이하에 속하는지를 
확인하는 if문을 작성하세요.

"이상과 이하"는 age(나이) 범위에 14나 90이 포함
된다는 의미입니다.
let age=20;
if(age>=14 && <=90){

} */




let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB=a&&b;

// 논리합(또는) 연산자
let AorB=a||b;

// 부정 연산자
let reverseValue=!value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy=true && ' ' && [] && {thisIsFalsy:false};
/* thisIsFalsy:false 이것도 객체라서 값이 있는거임. 안에 false는 키에 값을 준거고 객체가 평가됨
공백도 true
배열이라는 값이 들어잇는거라서 트루
전부 다 트루여서 마지막이 반환 */

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy=false || '' || [2,3].length || {thisIsTruthy:true};


let userName=prompt('사용자 아이디를 입력해주세요.', '');

if(userName?.toLowerCase() === 'admin'){ // ?. optional chaining은 null이나 undefined를 만나면 뒤에 문장 실행 x
  let pw=prompt('비밀번호를 입력해주세요.','');
  if(pw?.toLowerCase()==='themaster'){
    console.log('환영합니다.');
  }
  else{
    console.log('취소됐습니다.');
  }
}
else if(userName === '' || userName === null){ //esc누르면 null 나옴
  console.log('취소됐습니다.');
}
else{
  console.log('인증되지 않은 사용자입니다.');
}