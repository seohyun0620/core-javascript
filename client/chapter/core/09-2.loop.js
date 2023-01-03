/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

/* let i=0;

do{
  console.log('최초실행');
  i++;
}while(i<5); */


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let cnt=+prompt("몇번을 순환할까요?","");

do{
  if(cnt<=0 || !cnt){
    console.log("최초 실행된 메시지입니다.");
    break;
}
  console.log(cnt);
  cnt--;
}while( cnt); */

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정



// document는 전체문서 //querySelector를 이용해서 클래스 가져옴 
let first=document.querySelector('.first');

// nextSibling : first가 가지고 있는 너의 다음 형제가 누구야->공백 인식 함
console.log(first);

function next(node){
do{
  node=node.nextSibling;
}while(node.nodeType !== document.ELEMENT_NODE); // node: DOM에 있는 모든 요소
return node;
}
next(first); 

let second=document.querySelector('.first'); 

function prev(node){
  do{
    node = node.previousSibling; // node: DOM에 있는 모든 요소

  first = first.nextSibling;
  }while(node.nodeType !== document.ELEMENT_NODE)

  return node
}
prev(second);
