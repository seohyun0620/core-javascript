/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';

//console.log(message);
/* for(let key of message){
  console.log(key);
}; */


// length 프로퍼티
let stringTotalLength=message.length;
console.log('stringTotalLenght: ',stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter=message[0];
console.log('extractCharacter: ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
/* message='more'+message[5];
message[3]='i';
console.log(message); */


// 부분 문자열 추출
let slice=message.slice(8); //0,3없으면 전체 출력
console.log('slice: ',slice)

let subString=message.substring(-1,5);
console.log('subString: ',subString);

//subStr는 삭제 됨


// 문자열 포함 여부 확인
//i가 존재 한다면 몇번째인지 반환, 존재하지 않으면 음수 반환
//해당 문자가 여러개 들어있을 경우 가장 앞에 있는 인덱스를 반환
let indexOf=message.indexOf('p');
console.log('indexOf: ',indexOf);

//많이 안씀
let lastIndexOf;

//'less' 문자를 포함하고 있니-> 있으면 true 반환
let includes=message.includes('Less');
console.log('includes: ', includes);

//첫글자에 L이 있어?->있으면 true
let startsWith=message.startsWith('L');
console.log('starsWith: ',startsWith);
//마지막 글자 확인
let endsWith=message.endsWith('.');
console.log('endsWith: ',endsWith);


// 공백 잘라내기
//문자 안에 띄어쓰기는 공백으로 인식 안함
let trim=message.trim();
console.log('trime : ',trim);


// 텍스트 반복
let repeat=message.repeat(3);
console.log('repeat: ',repeat);


// 대소문자 변환
let toLowerCase=message.toLocaleLowerCase();
console.log('toLowerCase : ',toLowerCase)
let toUpperCase=message.toUpperCase();
console.log('toUpperCase : ',toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
toCamelCase('less-is-more');
toPascalCase('less-is-more');