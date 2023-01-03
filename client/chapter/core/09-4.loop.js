/* ---------------------------------------------------------------------- */
/* For In Loop : 안에 값이 있는지 확인                                                          */
/* ---------------------------------------------------------------------- */
// Object.prototype 는 객체니까  {} 이렇게 쓸 수 있음

const javaScript = { //key : value
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

let key='valueOf';
//javaScript라는 객체 안에 key값 중에 valueOf가 있냐->조상객체에서부터 속성 찾음
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

/* 객체 자신의 속성인지 확인하는 방법->hasOwnProperty
- "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은? */
// console.log(javaScript.hasOwnProperty(key));
// Object.prototype.nickName = 'tiger'

Object.prototype.hasOwnProperty.call(javaScript,key) //key가 있는지 확인해줘->valueOf라서 없음
/* Object가 가지고 있는 prototype(능력)중 hasOwnProperty에 접근을 하겠다
hasOwnProperty()는 함수임 . 함수를 빌려쓰기위해 call() 함수를 씀*/

// for ~ in 문
for( let key in javaScript ){
  if({}.hasOwnProperty.call(javaScript,key)){
    console.log(key);
  }
}

// - 객체 자신의 속성만 순환하려면?

// - 배열 객체 순환에 사용할 경우? for in을 잘 안씀 객체에 양보.. for of를 씀

let tens=[10,100,1000,10000];

for(let value in tens){
  if({}.hasOwnProperty.call(tens,value)){
    console.log(tens[value]); //값을 가져옴
  }
}