/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr=[10,100,1000,10000];
Array.isArray([]);
//console.log(typeof arr);

function isArray(data){ //유틸함수
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}

//console.log(Array.isArray({arr}));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user={};

arr.forEach(function(item, index){
  this[index]=item;
},user)

/* 원형 파괴 -------------------------------------------------------------- */

// reverse
/* arr.reverse()
console.log(arr); */

// splice
arr.splice(1,0,23,5);

// sort

//반환 값 <: 0 a가 b보다 앞에 있어야 한다
//반환 값 =: 0 a와 b의 순서를 바꾸지 않는다
//반환 값 >: 0 b가 a보다 앞에 있어야 한다
arr.sort((a,b)=>{
  return a-b;
});
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo=['밥먹기','미용실가기','코딩공부하기'];

let newArray=arr.map(item=>item*2);
//console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
//console.log(arr.indexOf(100));

// lastIndexOf (건너뜀)
// includes
//console.log(arr.includes(99));

/* 요소 찾기 -------------------------------------------------------------- */

const users=[
  {id:1,name:'뽀동'},
  {id:2,name:'또또'},
  {id:3,name:'서현'},
]

// find 해당되는 1가지만 찾음
const find=users.find((item, index)=>{
  return item.id===3;
})
//console.log(find);

// findIndex
const findIndex=users.findIndex((item)=>{
  return item.id===3;
})
console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result=arr.filter((number)=>{
  return number >100;
})
console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends=[
  {
    name:'장서현',
    age:26,
    job:'학생',
  },
  {
    name:'뽀동',
    age:8,
    job:'강아지',
  },
  {
    name:'또또',
    age:10,
    job:'고양이',
  }
];
// reduce
//친구들 나이의 총 합
let age=friends.reduce((acc,cur)=>{
  return acc+cur.age;
},0) //0 왜 있는지 생각해보기
console.log(age);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str='서현 뽀동 또또 코니 룰루 유미';

// split: 문자->배열
let nameArray =str.split(' ');
console.log(nameArray);

// join: 배열->문자
console.log(nameArray.join(' / '));