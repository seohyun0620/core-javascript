/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap={
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

//authentication 인증
//authorizaion 권한

let authUser=null;
authUser={
  uid:'user-id-asdA12k3klf',
  name: 'kindtiger',
  email:'tjgus7924@naver.com',
  isSignIn: true,
  permission: 'paid',
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
/* console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission); */

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
/* console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log(authUser["permission"]); */


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp='phone'){
  
  return{
    name:'unknown',
    email:'unknown@company.io',
    [computedProp]:'010-1111-2222',
  }
}
const user=createUser();


// 프로퍼티 포함 여부 확인
Object.prototype.SIGN=true;

for(let key in authUser){
  //진짜 Object가 가지고 잇는 prototype인 hasOwnProperty(인스턴스 메서드)를 빌려씀(call)
  if(Object.prototype.hasOwnProperty.call(authUser,key)){ //=if({}.hasOwnProperty.call(authUser,key))
    //console.log(key);
  }
}


// 프로퍼티 나열 authUser:객체 key만 모아놓은 배열, value만 모아놓은 배열 만들기
/* let keyArray=Object.keys(authUser);
let valueArray=Object.values(authUser);
console.log(keyArray);
console.log(valueArray); */

const getPropertiesList=object=>Object.keys(object);

let result=getPropertiesList(authUser);


// 프로퍼티 제거(값을 비우기) or 삭제(지워버리기) 

//유틸함수를 만들 수 있을 것 같은데 ...?
/* 1.함수 이름 정하기 {#ccc}
2.인수(arguments), 인자(parameter) 정하기
3.확인하기 (validation)
4.리턴값(return) */

function removeProperty(object,key){
  object[key]=null;
}

function deleteProperty(object,key){
  object[key]=null;
}
removeProperty(authUser,'uid');


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student={
/*   name:name,
  email:email,
  authorization:authorization,
  isLogin:isLogin, */
  name,
  email,
  authorization,
  isLogin,
}

// 프로퍼티 이름 제한=지양하기
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
//객체의 키를 배열로 바꾸고 그 배열의 개수가 0이면 false 그렇지 않으면 true
function isEmptyObject(object) {
  //return Object.keys(object).length===0?true:false;
  return Object.keys(object).length===0;
}
const empty={};
console.log(isEmptyObject(empty));


//월급의 총 합을 구하시오
let salaries={
  John:100,
  Ann:160,
  Pete:430, 
}
//Object.entries: key,value를 배열로 만들어줌
//Object.entries(salaries)

//배열 구조분해 할당 destructuring assignments
let total=0;
for(let [key, value] of Object.entries(salaries)){
/*   let key=keyValue[0];
  let value=keyValue[1]; */
  total+=value;
}

let color=['#ff0000','#2b00ff','#00ff2f'];

/* const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2]; */

//위에거랑 같음
const [,,green] = color;

//console.log(green);



/* 객체 구조분해 할당 */
/* let salaries={
  John:100,
  Ann:160,
  Pete:430, 
} */
const {John,Ann,Pete,}=salaries;

console.log(Ann);